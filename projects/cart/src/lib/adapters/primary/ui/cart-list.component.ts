import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from '../../../application/ports/secondary/cart.dto';
import { GETS_ALL_CART_DTO, GetsAllCartDtoPort } from '../../../application/ports/secondary/gets-all-cart.dto-port';
import { REMOVES_CART_DTO, RemovesCartDtoPort } from '../../../application/ports/secondary/removes-cart.dto-port';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-cart-list',
  templateUrl: './cart-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartListComponent {
  cartList$: Observable<CartDTO[]> = this._getsAllCartDto.getAll();
  readonly editAmount: FormGroup = new FormGroup({ number: new FormControl() });



  constructor(
    @Inject(GETS_ALL_CART_DTO) private _getsAllCartDto: GetsAllCartDtoPort,
    @Inject(REMOVES_CART_DTO) private _removesCartDto: RemovesCartDtoPort,
  ) { }

  removeItem(itemId: string): void {
    console.log(itemId)
    this._removesCartDto.remove(itemId);
  }
  clickConfirm(itemId: string) {
    if (confirm("Are you sure to delete this product?")) {
      console.log(itemId)
      this._removesCartDto.remove(itemId);
    } else {
      return;
    }
  }
  onEditAmountPlus(product: { quantity: number; id: string }) {
    console.log(product)
    product.quantity = product.quantity += 1;
  }

  onEditAmountMinus(product: { quantity: number; id: string }) {
    console.log(product)
    if (product.quantity != 1) {
      product.quantity = product.quantity -= 1;
    }
  }


  // totalPriceOneProduct(total: number, product: { price: number; quantity: number; }) {
  //   total = product.price * product.quantity
  // }


  // cartDetails() {
  //   if(localStorage.getItem('localCart')) {
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
  //     console.log(this.cartDetails)
  //   }
  // }

  // ngOnInit(): void {
  //   this.cartTotals();
  // }

  // acc: any;
  // val: any;
  total: number = 0;
  // cartSubtotal(acc: number, val: { price: number; quantity: number; }) {
  // localStorage.setItem('localCart', JSON.stringify(sth))
  // console.log(sth)

  // localStorage.getItem('localCart')
  // console.log(this.total)

  // this.total = acc + (val.price * val.quantity)
  // this.total.reduce(function (acc: number, val: { price: number; quantity: number; }) {
  //   return 
  // }, 0)
  // }

}
