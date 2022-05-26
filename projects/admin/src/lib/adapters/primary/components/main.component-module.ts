import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), ModalModule.forRoot()],
  declarations: [MainComponent],
  providers: [],
  exports: [MainComponent],
})
export class MainComponentModule {}
