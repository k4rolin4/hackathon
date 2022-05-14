import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from '../../../application/ports/secondary/cart.dto';
import { GETS_ALL_CART_DTO, GetsAllCartDtoPort } from '../../../application/ports/secondary/gets-all-cart.dto-port';

@Component({ 
    selector: 'lib-cart-list', 
    templateUrl: './cart-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class CartListComponent {
  cartList$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();

  constructor(@Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort) {
  }
}
