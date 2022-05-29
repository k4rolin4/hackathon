import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSellersComponent } from './top-sellers.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TopSellersComponent],
  	providers: [],
  	exports: [TopSellersComponent] })
export class TopSellersComponentModule {
}
