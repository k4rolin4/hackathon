import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllOrderDtoPort } from '../../../application/ports/secondary/dto/gets-all-order.dto-port';
import { OrderDTO } from '../../../application/ports/secondary/dto/order.dto';

@Injectable()
export class FirebaseOrderService implements GetsAllOrderDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<OrderDTO[]> {
    return this._client.collection<OrderDTO>('order').valueChanges(({idField: 'id'}));
  }
}
