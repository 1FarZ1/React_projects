  import { CommonModule } from '@angular/common';
  import { Component, Input } from '@angular/core';
  import { ProductCard } from '../product-card';

  @Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
      CommonModule
    ],
    template: `
      <div class="card">

        <div class="card-content">
          <div class="card-title">
            <h2>{{productCard.name}}</h2>
          </div>
          <div class="card-body">
            <p>{{productCard.description}}</p>
          </div>
          <div class="card-footer">
            <p>{{productCard.price | currency}}</p>
          </div>
        </div>
      <div class="card-image">
        <img [src]="productCard.image" alt="Product Photo">
      </div>


      </div>
    `,
    styleUrl: './product-card.component.css'
  })
  export class ProductCardComponent {
    @Input() productCard!: ProductCard;

  }
