import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import {
  SETS_PRODUCT_DTO,
  SetsProductDtoPort,
} from '../../../application/ports/secondary/dto/sets-product.dto-port';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-edit-product',
  templateUrl: './edit-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent {
  product$: Observable<Partial<ProductContext>> =
    this._selectsProductContext.select();

  readonly editProduct: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
    imageUrl: new FormControl(),
    id: new FormControl(),
  });

  constructor(
    public modalRef: BsModalRef,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort,
    @Inject(SETS_PRODUCT_DTO) private _setsProductDto: SetsProductDtoPort
  ) {}

  onButtonSubmited(editProduct: FormGroup): void {
    this._setsProductDto
      .set({
        name: editProduct.get('name')?.value,
        desc: editProduct.get('desc')?.value,
        price: editProduct.get('price')?.value,
        imageUrl: editProduct.get('imageUrl')?.value,
        id: editProduct.get('id')?.value,
      })
      .subscribe();
    this.editProduct.reset();
    console.log(editProduct);
  }
}
