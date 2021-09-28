import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'company', component:CompanyComponent},
  {path: 'category', component: CategoryComponent},
  {path:'product', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
