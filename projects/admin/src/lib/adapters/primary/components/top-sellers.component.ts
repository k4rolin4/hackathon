import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { TopSellerDTO } from '../../../application/ports/secondary/dto/top-seller.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  GETS_ALL_TOP_SELLER_DTO,
  GetsAllTopSellerDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-top-seller.dto-port';
import {
  ADDS_TOP_SELLER_DTO,
  AddsTopSellerDtoPort,
} from '../../../application/ports/secondary/dto/adds-top-seller.dto-port';
import {
  REMOVES_TOP_SELLER_DTO,
  RemovesTopSellerDtoPort,
} from '../../../application/ports/secondary/dto/removes-top-seller.dto-port';

@Component({
  selector: 'lib-top-sellers',
  templateUrl: './top-sellers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopSellersComponent {
  product$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();
  topSeller$: Observable<TopSellerDTO[]> = this._getsAllTopSellerDto.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(GETS_ALL_TOP_SELLER_DTO)
    private _getsAllTopSellerDto: GetsAllTopSellerDtoPort,
    @Inject(ADDS_TOP_SELLER_DTO)
    private _addsTopSellerDto: AddsTopSellerDtoPort,
    @Inject(REMOVES_TOP_SELLER_DTO)
    private _removesTopSellerDto: RemovesTopSellerDtoPort
  ) {}

  onButtonClicked(item: ProductDTO): void {
    this._addsTopSellerDto.add({
      name: item.name,
      imageUrl: item.imageUrl,
      desc: item.desc || '',
      price: item.price,
    });
  }

  onDeleteClicked(id: string): void {
    this._removesTopSellerDto.remove(id);
  }
}
