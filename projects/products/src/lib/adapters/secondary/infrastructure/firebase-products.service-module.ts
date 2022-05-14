import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseProductsService } from './firebase-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/gets-all-product.dto-port';
import { GETS_ONE_PRODUCT_DTO } from '../../../application/ports/secondary/gets-one-product.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseProductsService,
    { provide: GETS_ALL_PRODUCT_DTO, useExisting: FirebaseProductsService },
    { provide: GETS_ONE_PRODUCT_DTO, useExisting: FirebaseProductsService },
  ],
  exports: [],
})
export class FirebaseProductsServiceModule {}
