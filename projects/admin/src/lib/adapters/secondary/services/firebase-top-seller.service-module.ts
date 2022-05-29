import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTopSellerService } from './firebase-top-seller.service';
import { GETS_ALL_TOP_SELLER_DTO } from '../../../application/ports/secondary/dto/gets-all-top-seller.dto-port';
import { ADDS_TOP_SELLER_DTO } from '../../../application/ports/secondary/dto/adds-top-seller.dto-port';
import { REMOVES_TOP_SELLER_DTO } from '../../../application/ports/secondary/dto/removes-top-seller.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTopSellerService,
    { provide: GETS_ALL_TOP_SELLER_DTO, useExisting: FirebaseTopSellerService },
    { provide: ADDS_TOP_SELLER_DTO, useExisting: FirebaseTopSellerService },
    { provide: REMOVES_TOP_SELLER_DTO, useExisting: FirebaseTopSellerService }
  ],
  exports: [],
})
export class FirebaseTopSellerServiceModule {}
