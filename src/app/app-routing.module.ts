import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookPageComponent } from './book-page/book-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'search/:searchTerm', component: HomeComponent },
  { path:'tag/:tag', component: HomeComponent },
  { path:'book/:id', component: BookPageComponent },
  { path:'cart-page', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
