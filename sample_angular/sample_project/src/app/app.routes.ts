import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-detaills/product-detaills.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent }, // Assuming you'll pass the product ID in the URL
  // Add other routes as needed
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
