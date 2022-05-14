import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutSummaryPage } from './checkout-summary.page';
import { 
  CheckoutComponentModule, 
  FirebaseCheckoutServiceModule } 
from '@checkout';



@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CheckoutSummaryPage,
        }
      ]),
      FirebaseCheckoutServiceModule,
      CheckoutComponentModule
    ],
  	declarations: [CheckoutSummaryPage],
  	providers: [],
  	exports: [] })
export class CheckoutSummaryPageModule {
}
