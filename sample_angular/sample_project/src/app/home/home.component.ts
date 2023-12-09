import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductCard } from '../product-card';
import { FormsModule } from '@angular/forms';

//import http
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
        CommonModule,
        ProductCardComponent,
        FormsModule,
        RouterModule
    ]
})

export class HomeComponent {



  constructor(private http: HttpClient ,private router: Router ) { }
   baseUrl:string = 'http://localhost:3000/api/products';

  limit: number = 10;
  page: number = 0;

  lastPage: number = 1;
  pageNumbers: (number | '...')[] = [];
   productCardList: ProductCard[] = [];



   ngOnInit(): void {
    this.fetchData();
}


navigateToProductDetails(productId: number): void {



  console.log(productId)
  this.router.navigate(['/product', productId]);
}


fetchData(): void {
  this.http.get(this.baseUrl + `?page=${this.page}&limit=${this.limit}` ).subscribe((data: any) => {
    console.log(data)
    this.productCardList = data.products;
    const totalItems = Number.parseInt(data.count); // Replace with the actual total count from API
    this.lastPage = Math.ceil(totalItems / this.limit);

    // Generate page numbers for pagination
    const visiblePages = 5; // Set the number of visible page buttons
    const currentPage = this.page;
    const pages: (number | '...')[] = [];

    for (let i = 1; i <= this.lastPage; i++) {
      if (i === 1 || i === this.lastPage || (i >= currentPage - 2 && i <= currentPage + 2)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }

    this.pageNumbers = pages;
  }

  );
}

changePage(page: number): void {
  if (page < 1) return; // Prevent negative page numbers
  this.page = page;
  this.fetchData();
}

changeLimit(): void {
  this.page = 0; // Reset page back to 0 when the limit changes
  if(this.limit < 1) return; // Prevent negative limits

  this.fetchData();
}

}


