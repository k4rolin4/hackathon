import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_PRODUCT_DTO,
  AddsProductDtoPort,
} from '../../../application/ports/secondary/dto/adds-product.dto-port';

@Component({
  selector: 'lib-add-product',
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
  readonly createProduct: FormGroup = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl(),
    desc: new FormControl(),
    price: new FormControl(),
  });

  constructor(
    @Inject(ADDS_PRODUCT_DTO) private _addsProductDto: AddsProductDtoPort
  ) {}

  onCreateProductSubmited(createProduct: FormGroup): void {
    this._addsProductDto.add({
      name: createProduct.get('name')?.value,
      imageUrl: createProduct.get('imageUrl')?.value,
      desc: createProduct.get('desc')?.value,
      price: createProduct.get('price')?.value,
    });
    this.createProduct.reset();
  }
}
