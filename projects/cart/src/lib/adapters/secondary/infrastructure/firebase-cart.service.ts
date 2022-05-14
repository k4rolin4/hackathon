import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCartDtoPort } from '../../../application/ports/secondary/gets-all-cart.dto-port';
import { CartDTO } from '../../../application/ports/secondary/cart.dto';

@Injectable()
export class FirebaseCartService implements GetsAllCartDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<CartDTO>): Observable<CartDTO[]> {
    return this._client.collection<CartDTO>('carts').valueChanges(({idField: 'id'}));
  }
}
