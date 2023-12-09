import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  template: `
    <section class="product-details">
      <h2>Product Details</h2>
      <!-- <div *ngIf="product"> -->
      <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price  }}</p>
        <!-- Add more details as needed -->
      </div>
    </section>
  `,
  styleUrls: ['./product-detaills.component.css']
})
export class ProductDetailsComponent {
  product: any; // Replace 'any' with your actual Product type/interface

  // For demo purposes, you can populate the product data in ngOnInit
  ngOnInit(): void {
    // Simulated product data
    this.product = {
      name: 'Product Name',
      description: 'Product Description',
      price: 99.99,
      // Add more properties if needed
    };
  }
}
