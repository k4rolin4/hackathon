import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseTestimonialsServiceModule, NavbarComponentModule, TestimonialsComponentModule } from '@admin';
import { AdminTestimonialPage } from './admin-testimonial.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminTestimonialPage,
      },
    ]),
    TestimonialsComponentModule,
    FirebaseTestimonialsServiceModule,
    NavbarComponentModule
  ],
  declarations: [AdminTestimonialPage],
  providers: [],
  exports: [],
})
export class AdminTestimonialPageModule {}
