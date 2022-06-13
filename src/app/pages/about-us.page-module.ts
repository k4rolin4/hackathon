import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsComponentModule, FirebaseQuotesServiceModule } from '@aboutUs';
import { FirebaseTestimonialsServiceModule, TestimonialsComponentModule } from '@admin';
import { AboutUsPage } from './about-us.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  AboutUsComponentModule,
  TestimonialsComponentModule,
  FirebaseTestimonialsServiceModule,
  FirebaseQuotesServiceModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
