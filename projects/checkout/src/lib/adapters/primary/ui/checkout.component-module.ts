import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CheckoutComponent],
  	providers: [],
  	exports: [CheckoutComponent] })
export class CheckoutComponentModule {
}
