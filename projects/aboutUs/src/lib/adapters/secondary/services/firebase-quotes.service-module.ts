import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseQuotesService } from './firebase-quotes.service';
import { GETS_ALL_QUOTES_DTO } from '../../../application/ports/secondary/dto/gets-all-quotes.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseQuotesService, { provide: GETS_ALL_QUOTES_DTO, useExisting: FirebaseQuotesService }],
  	exports: [] })
export class FirebaseQuotesServiceModule {
}
