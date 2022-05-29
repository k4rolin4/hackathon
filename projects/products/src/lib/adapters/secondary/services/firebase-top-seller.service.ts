import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllTopSellerDtoPort } from '../../../application/ports/secondary/dto/gets-all-top-seller.dto-port';
import { TopSellerDTO } from '../../../application/ports/secondary/dto/top-seller.dto';

@Injectable()
export class FirebaseTopSellerService implements GetsAllTopSellerDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TopSellerDTO[]> {
    return this._client.collection<TopSellerDTO>('top-sellers').valueChanges(({idField: 'id'}));
  }
}
