import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAdminProductsService } from './firebase-admin-products.service';
import { GETS_ALL_PRODUCT_DTO } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { ADDS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { REMOVES_PRODUCT_DTO } from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { SETS_PRODUCT_DTO } from '../../../application/ports/secondary/dto/sets-product.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAdminProductsService, { provide: GETS_ALL_PRODUCT_DTO, useExisting: FirebaseAdminProductsService }, { provide: ADDS_PRODUCT_DTO, useExisting: FirebaseAdminProductsService }, { provide: REMOVES_PRODUCT_DTO, useExisting: FirebaseAdminProductsService }, { provide: SETS_PRODUCT_DTO, useExisting: FirebaseAdminProductsService }],
  	exports: [] })
export class FirebaseAdminProductsServiceModule {
}
