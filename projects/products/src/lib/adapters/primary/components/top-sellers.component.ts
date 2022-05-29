import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TopSellerDTO } from '../../../application/ports/secondary/dto/top-seller.dto';
import { GETS_ALL_TOP_SELLER_DTO, GetsAllTopSellerDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-seller.dto-port';

@Component({ selector: 'lib-top-sellers', templateUrl: './top-sellers.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TopSellersComponent {
    
    topSeller$: Observable<TopSellerDTO[]> = this._getsAllTopSellerDto.getAll();

  constructor(@Inject(GETS_ALL_TOP_SELLER_DTO) private _getsAllTopSellerDto: GetsAllTopSellerDtoPort) {
  }
}
