import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import {
  REMOVES_PRODUCT_DTO,
  RemovesProductDtoPort,
} from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  SetsStateProductContextPort,
  SETS_STATE_PRODUCT_CONTEXT,
} from '../../../application/ports/secondary/context/sets-state-product.context-port';

@Component({
  selector: 'lib-delete-product',
  templateUrl: './delete-product.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductComponent {
  product$: Observable<string> = this._selectsProductContext
    .select()
    .pipe(
      map(
        (productcontext: Partial<ProductContext>) =>
          productcontext?.product?.id || ''
      )
    );

  constructor(
    public modalRef: BsModalRef,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort,
    @Inject(REMOVES_PRODUCT_DTO)
    private _removesProductDto: RemovesProductDtoPort,
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort
  ) {}

  async onDeleteClicked(id: string): Promise<void> {
    this._removesProductDto.remove(id).subscribe();
    console.log(id);
    this.modalRef?.hide();
    await delay(4000);
    // this._setsStateProductContext.setState({}).subscribe();
  }
}
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
