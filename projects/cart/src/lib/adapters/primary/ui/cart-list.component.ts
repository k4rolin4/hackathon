import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from '../../../application/ports/secondary/cart.dto';
import { GETS_ALL_CART_DTO, GetsAllCartDtoPort } from '../../../application/ports/secondary/gets-all-cart.dto-port';
import { REMOVES_CART_DTO, RemovesCartDtoPort } from '../../../application/ports/secondary/removes-cart.dto-port';

@Component({ 
    selector: 'lib-cart-list', 
    templateUrl: './cart-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })

export class CartListComponent {
  cartList$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();

  constructor(@Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort, @Inject(REMOVES_CART_DTO) private _removesCartDto: RemovesCartDtoPort) {
  }

  removeItem(itemId: string): void {
    console.log(itemId)
    this._removesCartDto.remove(itemId);
  }
  clickConfirm(itemId: string) {
    if(confirm("Are you sure to delete this product?")) {
      console.log(itemId)
      this._removesCartDto.remove(itemId);
    } else {
      return;
    }
  }

}
