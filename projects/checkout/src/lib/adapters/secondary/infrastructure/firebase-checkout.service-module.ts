import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCheckoutService } from './firebase-checkout.service';
import { GETS_ALL_CHECKOUT_DTO } from '../../../application/ports/secondary/gets-all-checkout.dto-port';
import { ADDS_CHECKOUT_DTO } from '../../../application/ports/secondary/adds-checkout.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCheckoutService, { provide: GETS_ALL_CHECKOUT_DTO, useExisting: FirebaseCheckoutService }, { provide: ADDS_CHECKOUT_DTO, useExisting: FirebaseCheckoutService }, ],
  	exports: [] })
export class FirebaseCheckoutServiceModule {
}
