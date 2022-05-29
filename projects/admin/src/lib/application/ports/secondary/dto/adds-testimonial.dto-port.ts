import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialDTO } from './testimonial.dto';

export const ADDS_TESTIMONIAL_DTO = new InjectionToken<AddsTestimonialDtoPort>('ADDS_TESTIMONIAL_DTO');

export interface AddsTestimonialDtoPort {
  add(testimonial: Partial<TestimonialDTO>): Observable<void>;
}
