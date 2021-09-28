import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getCompanyList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/company/');
  }

  addCompany(val:any){
    return this.http.post(this.APIUrl + '/company/',val);
  }

  updateCompany(val:any){
    return this.http.put(this.APIUrl + '/company/',val);
  }

  deleteCompany(val:any){
    return this.http.delete(this.APIUrl + '/company/'+val);
  }


  getProductList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/product/');
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl + '/product/',val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl + '/product/',val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl + '/product/'+val);
  }
  getCategoryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/category/');
  }
  addCategory(val:any){
    return this.http.post(this.APIUrl + '/category/',val);
  }
  updateCategory(val:any){
    return this.http.put(this.APIUrl + '/category/',val);
  }
  deleteCategory(val:any){
    return this.http.delete(this.APIUrl + '/category/',val);
  }




}
