import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/gets-all-cart.dto-port';
import { CartDTO } from '../../../application/ports/secondary/cart.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsCartDtoPort } from '../../../application/ports/secondary/adds-cart.dto-port';
import { RemovesCartDtoPort } from '../../../application/ports/secondary/removes-cart.dto-port';

@Injectable()
export class FirebaseCartService implements GetsAllCartDtoPort, AddsCartDtoPort, RemovesCartDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<CartDTO>): Observable<CartDTO[]> {

    return this._client.collection<CartDTO>('carts').valueChanges(({idField: 'id'})).pipe(map((data: CartDTO[]) => filterByCriterion(data, criterion)));
  }
  add(cart: Partial<CartDTO>): void {
    console.log(cart)
    this._client.collection('carts').add(cart);
  }

  remove(id: string): void {
    this._client.doc('carts/'+id).delete();
  }
}
