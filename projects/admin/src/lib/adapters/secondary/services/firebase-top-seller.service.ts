import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTopSellerDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-seller.dto-port';
import { AddsTopSellerDtoPort } from '../../../application/ports/secondary/dto/adds-top-seller.dto-port';
import { RemovesTopSellerDtoPort } from '../../../application/ports/secondary/dto/removes-top-seller.dto-port';
import { TopSellerDTO } from '../../../application/ports/secondary/dto/top-seller.dto';

@Injectable()
export class FirebaseTopSellerService implements GetsAllTopSellerDtoPort, AddsTopSellerDtoPort, RemovesTopSellerDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TopSellerDTO[]> {
    return this._client.collection<TopSellerDTO>('top-sellers').valueChanges(({idField: 'id'}));
  }

  add(topSeller: Partial<TopSellerDTO>): Observable<void> {
    return from(this._client.collection('top-sellers').add(topSeller)).pipe(map(() => void 0));
  }

  remove(id: string): Observable<void> {
    return from(this._client.doc('top-sellers/'+id).delete()).pipe(map(() => void 0));
  }
}
