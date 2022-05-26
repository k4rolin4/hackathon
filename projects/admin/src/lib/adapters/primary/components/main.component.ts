import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import {
  GETS_ALL_PRODUCT_DTO,
  GetsAllProductDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import {
  ADDS_TOP_SELLER_DTO,
  AddsTopSellerDtoPort,
} from '../../../application/ports/secondary/dto/adds-top-seller.dto-port';
import {
  ADDS_PRODUCT_DTO,
  AddsProductDtoPort,
} from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteProductComponent } from './delete-product.component';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  modalRef?: BsModalRef;
  product$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();

  constructor(
    private modalService: BsModalService,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(ADDS_TOP_SELLER_DTO)
    private _addsTopSellerDto: AddsTopSellerDtoPort,
    @Inject(ADDS_PRODUCT_DTO) private _addsProductDto: AddsProductDtoPort
  ) {}
  onButtonClicked(item: ProductDTO): void {
    this._addsTopSellerDto.add({
      name: item.name,
      imageUrl: item.imageUrl,
      desc: item.desc || '',
      price: item.price,
    });
  }

  onModalOpened() {
    this.modalRef = this.modalService.show(DeleteProductComponent);
  }
}
