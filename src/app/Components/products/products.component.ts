import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  value = 90;
  sale= 150;
  formated = new Intl.NumberFormat(
    'ar-AR',
    { style: 'currency', currency: 'EGP' }
  ).format(this.value);

sales = new Intl.NumberFormat(
  'ar-AR',
  { style: 'currency', currency: 'EGP' }
).format(this.sale);

}
