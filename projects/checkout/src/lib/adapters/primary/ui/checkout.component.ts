import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_CHECKOUT_DTO, AddsCheckoutDtoPort } from '../../../application/ports/secondary/adds-checkout.dto-port';

@Component({ selector: 'lib-checkout', templateUrl: './checkout.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CheckoutComponent {
  readonly addCheckout: FormGroup = new FormGroup({fullName: 
    new FormControl(),
    address: new FormControl(), 
    town: new FormControl(), 
    phone: new FormControl(), 
    email: new FormControl()});

  constructor(@Inject(ADDS_CHECKOUT_DTO) private _addsCheckoutDto: AddsCheckoutDtoPort) {
  }

  onProductsClicked(addsCheckout: FormGroup): void {
    this._addsCheckoutDto.add({
      fullName: addsCheckout.get('fullName')?.value,
      address: addsCheckout.get('address')?.value,
      town: addsCheckout.get('town')?.value,
      phone: addsCheckout.get('phone')?.value,
      email: addsCheckout.get('email')?.value
  });
      addsCheckout.reset();

  }
}
