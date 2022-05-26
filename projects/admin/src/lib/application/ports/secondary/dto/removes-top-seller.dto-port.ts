import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const REMOVES_TOP_SELLER_DTO = new InjectionToken<RemovesTopSellerDtoPort>('REMOVES_TOP_SELLER_DTO');

export interface RemovesTopSellerDtoPort {
  remove(id: string): Observable<void>;
}
