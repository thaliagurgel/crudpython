import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ShowCompComponent } from './company/show-comp/show-comp.component';
import { AddEditCompComponent } from './company/add-edit-comp/add-edit-comp.component';
import { ProductsComponent } from './company/products/products.component';
import { ShowProdComponent } from './company/products/show-prod/show-prod.component';
import { AddEditProdComponent } from './company/products/add-edit-prod/add-edit-prod.component';
import { CategoryComponent } from './category/category.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddEditCatComponent } from './category/add-edit-cat/add-edit-cat.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ShowCompComponent,
    AddEditCompComponent,
    ProductsComponent,
    ShowProdComponent,
    AddEditProdComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
