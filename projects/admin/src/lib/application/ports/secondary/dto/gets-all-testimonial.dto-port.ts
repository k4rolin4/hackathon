import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialDTO } from './testimonial.dto';

export const GETS_ALL_TESTIMONIAL_DTO = new InjectionToken<GetsAllTestimonialDtoPort>('GETS_ALL_TESTIMONIAL_DTO');

export interface GetsAllTestimonialDtoPort {
  getAll(): Observable<TestimonialDTO[]>;
}
