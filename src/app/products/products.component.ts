import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Bonsai', price: '$10.50', image: 'assets/Imgs/bonsai.png' },
    { name: 'Maraconda', price: '$7.50', image: 'assets/Imgs/maraconda.png' },
    { name: 'Cuna de Moisés', price: '$13.50', image: 'assets/Imgs/cuna de nino.png' },
    { name: 'Croton', price: '$24.50', image: 'assets/Imgs/croton.png' }
  ];
}
