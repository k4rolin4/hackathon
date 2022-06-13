import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesDTO } from './quotes.dto';

export const GETS_ALL_QUOTES_DTO = new InjectionToken<GetsAllQuotesDtoPort>('GETS_ALL_QUOTES_DTO');

export interface GetsAllQuotesDtoPort {
  getAll(): Observable<QuotesDTO[]>;
}
