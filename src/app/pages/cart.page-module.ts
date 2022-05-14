import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartPage } from './cart.page';
import { CartListComponentModule } from '../../../projects/cart/src/lib/adapters/primary/ui/cart-list.component-module';
import { FirebaseCartServiceModule } from '../../../projects/cart/src/lib/adapters/secondary/infrastructure/firebase-cart.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CartPage,
        }
      ]),
  CartListComponentModule,
  FirebaseCartServiceModule
],
  	declarations: [CartPage],
  	providers: [],
  	exports: [] })
export class CartPageModule {
}
