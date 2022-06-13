import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllQuotesDtoPort } from '../../../application/ports/secondary/dto/gets-all-quotes.dto-port';
import { QuotesDTO } from '../../../application/ports/secondary/dto/quotes.dto';

@Injectable()
export class FirebaseQuotesService implements GetsAllQuotesDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<QuotesDTO[]> {
    return this._client.collection<QuotesDTO>('quotes').valueChanges(({idField: 'id'}));
  }
}
