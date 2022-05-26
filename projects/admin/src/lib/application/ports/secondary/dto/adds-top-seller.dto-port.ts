import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TopSellerDTO } from './top-seller.dto';

export const ADDS_TOP_SELLER_DTO = new InjectionToken<AddsTopSellerDtoPort>('ADDS_TOP_SELLER_DTO');

export interface AddsTopSellerDtoPort {
  add(topSeller: Partial<TopSellerDTO>): Observable<void>;
}
