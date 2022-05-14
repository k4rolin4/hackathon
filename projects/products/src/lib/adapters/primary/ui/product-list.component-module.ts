import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ProductListComponent],
  	providers: [],
  	exports: [ProductListComponent] })
export class ProductListComponentModule {
}
