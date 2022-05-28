import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
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

  constructor(
    public modalRef: BsModalRef,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
  ) {}
}
