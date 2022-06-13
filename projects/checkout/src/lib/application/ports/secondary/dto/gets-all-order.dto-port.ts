import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDTO } from './order.dto';

export const GETS_ALL_ORDER_DTO = new InjectionToken<GetsAllOrderDtoPort>('GETS_ALL_ORDER_DTO');

export interface GetsAllOrderDtoPort {
  getAll(): Observable<OrderDTO[]>;
}
