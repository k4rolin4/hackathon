import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductContext } from './product.context';

export const PATCHES_PRODUCT_CONTEXT = new InjectionToken<PatchesProductContextPort>('PATCHES_PRODUCT_CONTEXT');

export interface PatchesProductContextPort {
  patch(state: Partial<ProductContext>): Observable<void>;
}
