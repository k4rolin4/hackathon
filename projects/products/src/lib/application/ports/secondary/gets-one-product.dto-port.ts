import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from './product.dto';

export const GETS_ONE_PRODUCT_DTO = new InjectionToken<GetsOneProductDtoPort>(
  'GETS_ONE_PRODUCT_DTO'
);

export interface GetsOneProductDtoPort {
  getOne(id: string): Observable<ProductDTO>;
}
