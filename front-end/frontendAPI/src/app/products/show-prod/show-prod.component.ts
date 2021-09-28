import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.css']
})
export class ShowProdComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditProdComp:boolean=false;
  prod: any;

  ProductIdFilter:string="";
  ProductNameFilter:string="";
  ProductListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshProdList();
  }

  addClick(){
    this.prod={
      ProductId:0,
      ProductName:""
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProdComp=true;

  }

  editClick(item: any){
    this.prod=item;
    this.ModalTitle="Edit Product";
    this.ActivateAddEditProdComp=true;
  }

  deleteClick(item: { ProductId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(item.ProductId).subscribe(data=>{
        alert(data.toString());
        this.refreshProdList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProdComp=false;
    this.refreshProdList();
  }


  refreshProdList(){
    this.service.getProductList().subscribe(data=>{
      this.ProductList=data;
      this.ProductListWithoutFilter=data;
    });
  }






}
