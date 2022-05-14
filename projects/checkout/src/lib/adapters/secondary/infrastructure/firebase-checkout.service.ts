import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsCheckoutDtoPort } from '../../../application/ports/secondary/adds-checkout.dto-port';
import { CheckoutDTO } from '../../../application/ports/secondary/checkout.dto';

@Injectable()
export class FirebaseCheckoutService implements AddsCheckoutDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(checkout: Partial<CheckoutDTO>): void {
    this._client.collection('checkouts').add(checkout);
  }
}
