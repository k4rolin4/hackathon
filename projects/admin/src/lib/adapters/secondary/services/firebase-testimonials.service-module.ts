import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTestimonialsService } from './firebase-testimonials.service';
import { GETS_ALL_TESTIMONIAL_DTO } from '../../../application/ports/secondary/dto/gets-all-testimonial.dto-port';
import { ADDS_TESTIMONIAL_DTO } from '../../../application/ports/secondary/dto/adds-testimonial.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTestimonialsService, { provide: GETS_ALL_TESTIMONIAL_DTO, useExisting: FirebaseTestimonialsService }, { provide: ADDS_TESTIMONIAL_DTO, useExisting: FirebaseTestimonialsService }],
  	exports: [] })
export class FirebaseTestimonialsServiceModule {
}
