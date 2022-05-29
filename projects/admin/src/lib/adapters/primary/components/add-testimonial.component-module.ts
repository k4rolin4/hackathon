import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTestimonialComponent } from './add-testimonial.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddTestimonialComponent],
  	providers: [],
  	exports: [AddTestimonialComponent] })
export class AddTestimonialComponentModule {
}
