import { InjectionToken } from '@angular/core';
import { CheckoutDTO } from './checkout.dto';

export const ADDS_CHECKOUT_DTO = new InjectionToken<AddsCheckoutDtoPort>('ADDS_CHECKOUT_DTO');

export interface AddsCheckoutDtoPort {
  add(checkout: Partial<CheckoutDTO>): void;
}
