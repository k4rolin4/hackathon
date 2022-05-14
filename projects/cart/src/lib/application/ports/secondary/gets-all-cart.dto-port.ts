import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CartDTO } from './cart.dto';

export const GETS_ALL_CART_DTO = new InjectionToken<GetsAllCartDtoPort>('GETS_ALL_CART_DTO');

export interface GetsAllCartDtoPort {
  getAll(criterion?: Partial<CartDTO>): Observable<CartDTO[]>;
}
