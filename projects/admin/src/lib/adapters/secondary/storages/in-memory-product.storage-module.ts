import { NgModule } from '@angular/core';
import { InMemoryProductStorage } from './in-memory-product.storage';
import { SETS_STATE_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/sets-state-product.context-port';
import { SELECTS_PRODUCT_CONTEXT } from '../../../application/ports/secondary/context/selects-product.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryProductStorage, { provide: SETS_STATE_PRODUCT_CONTEXT, useExisting: InMemoryProductStorage }, { provide: SELECTS_PRODUCT_CONTEXT, useExisting: InMemoryProductStorage }],
  	exports: [] })
export class InMemoryProductStorageModule {
}
