import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutDTO } from './checkout.dto';

export const GETS_ALL_CHECKOUT_DTO = new InjectionToken<GetsAllCheckoutDtoPort>('GETS_ALL_CHECKOUT_DTO');

export interface GetsAllCheckoutDtoPort {
  getAll(criterion?: Partial<CheckoutDTO>): Observable<CheckoutDTO[]>;
}
