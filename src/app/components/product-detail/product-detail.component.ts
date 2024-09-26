import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productName: string | null = null;
  products = [
    { name: 'Bonsai', price: '$10.50', image: 'assets/Imgs/bonsai.png' },
    { name: 'Maraconda', price: '$7.50', image: 'assets/Imgs/maraconda.png' },
    { name: 'Cuna de Moisés', price: '$13.50', image: 'assets/Imgs/cuna de nino.png' },
    { name: 'Croton', price: '$24.50', image: 'assets/Imgs/croton.png' }
  ];
  selectedProduct: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('name');
    
    this.selectedProduct = this.products.find(product => product.name === this.productName);
  }


}
