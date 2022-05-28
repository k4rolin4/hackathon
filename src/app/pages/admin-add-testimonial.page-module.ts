import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTestimonialComponentModule, FirebaseTestimonialsServiceModule, NavbarComponentModule } from '@admin';
import { AdminAddTestimonialPage } from './admin-add-testimonial.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminAddTestimonialPage,
        }
      ]),
  NavbarComponentModule,
  AddTestimonialComponentModule,
  FirebaseTestimonialsServiceModule
],
  	declarations: [AdminAddTestimonialPage],
  	providers: [],
  	exports: [] })
export class AdminAddTestimonialPageModule {
}
