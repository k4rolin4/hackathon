import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTestimonialDtoPort } from '../../../application/ports/secondary/dto/gets-all-testimonial.dto-port';
import { AddsTestimonialDtoPort } from '../../../application/ports/secondary/dto/adds-testimonial.dto-port';
import { TestimonialDTO } from '../../../application/ports/secondary/dto/testimonial.dto';

@Injectable()
export class FirebaseTestimonialsService implements GetsAllTestimonialDtoPort, AddsTestimonialDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TestimonialDTO[]> {
    return this._client.collection<TestimonialDTO>('testimonials').valueChanges(({idField: 'id'}));
  }

  add(testimonial: Partial<TestimonialDTO>): Observable<void> {
    return from(this._client.collection('testimonials').add(testimonial)).pipe(map(() => void 0));
  }
}
