import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../../application/ports/secondary/dto/order.dto';
import { ADDS_CHECKOUT_DTO, AddsCheckoutDtoPort } from '../../../application/ports/secondary/adds-checkout.dto-port';
import { GETS_ALL_ORDER_DTO, GetsAllOrderDtoPort } from '../../../application/ports/secondary/dto/gets-all-order.dto-port';

@Component({ selector: 'lib-checkout', templateUrl: './checkout.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CheckoutComponent {
  readonly addCheckout: FormGroup = new FormGroup({fullName: 
    new FormControl(),
    address: new FormControl(), 
    town: new FormControl(), 
    phone: new FormControl(), 
    email: new FormControl()});
  order$: Observable<OrderDTO[]> = this._getsAllOrderDto.getAll();

  constructor(@Inject(ADDS_CHECKOUT_DTO) private _addsCheckoutDto: AddsCheckoutDtoPort, @Inject(GETS_ALL_ORDER_DTO) private _getsAllOrderDto: GetsAllOrderDtoPort) {
  }

  placeOrder: boolean = false;

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
  showAlert(): void {
    this.placeOrder = true;
  }
}