import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/product.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseProductsService implements GetsAllProductDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<ProductDTO>): Observable<ProductDTO[]> {
    return this._client
      .collection<ProductDTO>('products-list')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: ProductDTO[]) => filterByCriterion(data, criterion)));
  }
}
