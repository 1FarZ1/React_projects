import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../product-card';
import { CommonModule } from '@angular/common';
import { LoadingWidgetComponent } from "../loading-widget/loading-widget.component";

@Component({
    selector: 'app-product-detaills',
    standalone: true,
    templateUrl: './product-detaills.component.html',
    styleUrls: ['./product-detaills.component.css'],
    imports: [CommonModule, LoadingWidgetComponent]
})
export class ProductDetailsComponent {
  productId!: string;
  product: ProductCard | null = null;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.fetchProductDetails(this.productId);
    });
  }

  fetchProductDetails(productId: string): void {
    this.http.get(`http://localhost:3000/api/products/detaills/${productId}`).subscribe(
      (data: any) => {
        console.log('Product Details:', data.product);
        this.product = data.product as ProductCard;
        this.loading = false; // Set loading to false when data is fetched
      },
      (error) => {
        console.error('Error fetching product details:', error);
        this.loading = false; // Set loading to false on error as well
      }
    );
  }
}
