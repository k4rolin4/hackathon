import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({ 
    selector: 'lib-add-product', 
    templateUrl: './add-product.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class AddProductComponent {
}
