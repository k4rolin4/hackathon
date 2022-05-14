import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseCartService } from './firebase-cart.service';
import { GETS_ALL_CART_DTO } from '../../../application/ports/secondary/gets-all-cart.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCartService, { provide: GETS_ALL_CART_DTO, useExisting: FirebaseCartService }],
  	exports: [] })
export class FirebaseCartServiceModule {
}
