import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';
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
import {
  SETS_STATE_PRODUCT_CONTEXT,
  SetsStateProductContextPort,
} from '../../../application/ports/secondary/context/sets-state-product.context-port';
import {
  SELECTS_PRODUCT_CONTEXT,
  SelectsProductContextPort,
} from '../../../application/ports/secondary/context/selects-product.context-port';
import { DeleteProductComponent } from './delete-product.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  modalRef?: BsModalRef;
  product$: Observable<ProductDTO[]> = this._getsAllProductDto.getAll();
  id$: Observable<String> = this._selectsProductContext
    .select()
    .pipe(
      map(
        (productcontext: Partial<ProductContext>) =>
          productcontext?.product?.id || ''
      )
    );

  constructor(
    private modalService: BsModalService,
    @Inject(GETS_ALL_PRODUCT_DTO)
    private _getsAllProductDto: GetsAllProductDtoPort,
    @Inject(ADDS_TOP_SELLER_DTO)
    private _addsTopSellerDto: AddsTopSellerDtoPort,
    @Inject(ADDS_PRODUCT_DTO) private _addsProductDto: AddsProductDtoPort,
    @Inject(SETS_STATE_PRODUCT_CONTEXT)
    private _setsStateProductContext: SetsStateProductContextPort,
    @Inject(SELECTS_PRODUCT_CONTEXT)
    private _selectsProductContext: SelectsProductContextPort
  ) {}
  onButtonClicked(item: ProductDTO): void {
    this._addsTopSellerDto.add({
      name: item.name,
      imageUrl: item.imageUrl,
      desc: item.desc || '',
      price: item.price,
    });
  }

  onModalOpened(product: ProductDTO) {
    this.modalRef = this.modalService.show(DeleteProductComponent);
    this._setsStateProductContext.setState({ product }).subscribe();
    console.log(product);
  }
}
