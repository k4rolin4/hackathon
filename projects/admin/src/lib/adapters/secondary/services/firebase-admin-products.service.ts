import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { RemovesProductDtoPort } from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class FirebaseAdminProductsService
  implements GetsAllProductDtoPort, AddsProductDtoPort, RemovesProductDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('products-list')
      .valueChanges({ idField: 'id' });
  }

  add(product: Partial<ProductDTO>): Observable<void> {
    return from(this._client.collection('products-list').add(product)).pipe(
      map(() => void 0)
    );
  }

  remove(id: string): Observable<void> {
    return from(this._client.doc('products-list/' + id).delete()).pipe(
      map(() => void 0)
    );
  }
}
