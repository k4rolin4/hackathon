import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SetsStateProductContextPort } from '../../../application/ports/secondary/context/sets-state-product.context-port';
import { SelectsProductContextPort } from '../../../application/ports/secondary/context/selects-product.context-port';
import { PatchesProductContextPort } from '../../../application/ports/secondary/context/patches-product.context-port';
import { ProductContext } from '../../../application/ports/secondary/context/product.context';

@Injectable()
export class InMemoryProductStorage implements SetsStateProductContextPort, SelectsProductContextPort, PatchesProductContextPort {
  private _subject: Subject<Partial<ProductContext>> = new BehaviorSubject<Partial<ProductContext>>({});

  setState(state: ProductContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }

  select(): Observable<Partial<ProductContext>> {
    return this._subject.asObservable();
  }

  patch(state: Partial<ProductContext>): Observable<void> {
    return this._subject.pipe(take(1), map((context) => this._subject.next({ ...context, ...state })));
  }
}
