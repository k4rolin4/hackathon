import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/gets-all-product.dto-port';
import {
  ADDS_CART_DTO,
  AddsCartDtoPort,
} from 'projects/cart/src/lib/application/ports/secondary/adds-cart.dto-port';
import { FormGroup } from '@angular/forms';

import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  product$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(ADDS_CART_DTO)
    private _addsCartDto: AddsCartDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  placeOrder: boolean = false;

  onItemClicked(item: ProductDTO): void {
    console.log(item);
    this._addsCartDto.add({
      name: item.name,
      imageUrl: item.imageUrl,
      desc: item.desc || '',
      price: item.price,
    });
  }

  onItemOnpictureclickeded(product: ProductDTO): void {
    this._contextDtoStorage.next({ productId: product.id });
  }

  async showAlert(): Promise<void> {
    this.placeOrder = true;
  }
}
