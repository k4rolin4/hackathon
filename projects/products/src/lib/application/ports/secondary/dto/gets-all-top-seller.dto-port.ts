import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopSellerDTO } from './top-seller.dto';

export const GETS_ALL_TOP_SELLER_DTO = new InjectionToken<GetsAllTopSellerDtoPort>('GETS_ALL_TOP_SELLER_DTO');

export interface GetsAllTopSellerDtoPort {
  getAll(): Observable<TopSellerDTO[]>;
}
