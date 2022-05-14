import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import {
  GETS_ONE_PRODUCT_DTO,
  GetsOneProductDtoPort,
} from '../../../application/ports/secondary/gets-one-product.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  product$: Observable<ProductDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsOneProductDto.getOne(data.productId)
      )
    );

  constructor(
    @Inject(GETS_ONE_PRODUCT_DTO)
    private _getsOneProductDto: GetsOneProductDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
