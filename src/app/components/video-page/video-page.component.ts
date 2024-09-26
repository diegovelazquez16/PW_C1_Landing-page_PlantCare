import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  relatedProducts: any[] = [];

  ngOnInit(): void {
    this.relatedProducts = [
      { name: 'Bonsai', price: '$10.50', image: 'assets/Imgs/bonsai.png' },
      { name: 'Maraconda', price: '$7.50', image: 'assets/Imgs/maraconda.png' },
      { name: 'Cuna de Moisés', price: '$13.50', image: 'assets/Imgs/cuna de nino.png' },
      { name: 'Croton', price: '$24.50', image: 'assets/Imgs/croton.png' }
    ];
  }
}
