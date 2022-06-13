import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [CommonModule, RouterModule, AlertModule.forRoot()],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
