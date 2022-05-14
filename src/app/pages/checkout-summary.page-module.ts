import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutSummaryPage } from './checkout-summary.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CheckoutSummaryPage,
        }
      ])],
  	declarations: [CheckoutSummaryPage],
  	providers: [],
  	exports: [] })
export class CheckoutSummaryPageModule {
}
