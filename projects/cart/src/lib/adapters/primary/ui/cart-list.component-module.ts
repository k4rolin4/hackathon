import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, RouterModule, ReactiveFormsModule],
  	declarations: [CartListComponent],
  	providers: [],
  	exports: [CartListComponent] })
export class CartListComponentModule {
}
