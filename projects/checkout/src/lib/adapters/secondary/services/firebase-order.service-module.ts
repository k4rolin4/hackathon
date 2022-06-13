import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseOrderService } from './firebase-order.service';
import { GETS_ALL_ORDER_DTO } from '../../../application/ports/secondary/dto/gets-all-order.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseOrderService, { provide: GETS_ALL_ORDER_DTO, useExisting: FirebaseOrderService }],
  	exports: [] })
export class FirebaseOrderServiceModule {
}
