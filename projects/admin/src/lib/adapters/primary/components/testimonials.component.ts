import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TestimonialDTO } from '../../../application/ports/secondary/dto/testimonial.dto';
import { GETS_ALL_TESTIMONIAL_DTO, GetsAllTestimonialDtoPort } from '../../../application/ports/secondary/dto/gets-all-testimonial.dto-port';

@Component({ selector: 'lib-testimonials', templateUrl: './testimonials.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TestimonialsComponent {
  testimonial$: Observable<TestimonialDTO[]> = this._getsAllTestimonialDto.getAll();

  constructor(@Inject(GETS_ALL_TESTIMONIAL_DTO) private _getsAllTestimonialDto: GetsAllTestimonialDtoPort) {
  }
}
