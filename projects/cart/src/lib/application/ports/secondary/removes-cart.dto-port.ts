import { InjectionToken } from '@angular/core';

export const REMOVES_CART_DTO = new InjectionToken<RemovesCartDtoPort>('REMOVES_CART_DTO');

export interface RemovesCartDtoPort {
  remove(id: string): void;
}
