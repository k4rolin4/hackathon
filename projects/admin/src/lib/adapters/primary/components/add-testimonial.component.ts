import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ADDS_TESTIMONIAL_DTO,
  AddsTestimonialDtoPort,
} from '../../../application/ports/secondary/dto/adds-testimonial.dto-port';

@Component({
  selector: 'lib-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTestimonialComponent {
  readonly testimonial: FormGroup = new FormGroup({
    name: new FormControl(),
    desc: new FormControl(),
    imageUrl: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TESTIMONIAL_DTO)
    private _addsTestimonialDto: AddsTestimonialDtoPort
  ) {}

  onButtonClicked(testimonial: FormGroup): void {
    this._addsTestimonialDto
      .add({
        name: this.testimonial.get('name')?.value,
        desc: this.testimonial.get('desc')?.value,
        imageUrl: this.testimonial.get('imageUrl')?.value,
      })
      .subscribe();
    this.testimonial.reset();
  }
}
