import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditCatComp:boolean=false;
  cat:any;

  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.cat={
      CategoryId:0,
      CategoryName:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item: any){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item: { CategoryId: any; }){
    if(confirm('Tem certeza??')){
      this.service.deleteCategory(item.CategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshDepList();
  }


  refreshDepList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  // FilterFn(){
  //   var CategoryIdFilter = this.CategoryIdFilter;
  //   var CategoryNameFilter = this.CategoryNameFilter;

  //   this.CategoryList = this.CategoryListWithoutFilter.filter(function (el){
  //       return el.CategoryId.toString().toLowerCase().includes(
  //         CategoryIdFilter.toString().trim().toLowerCase()
  //       )&&
  //       el.CategoryName.toString().toLowerCase().includes(
  //         CategoryNameFilter.toString().trim().toLowerCase()
  //       )
  //   });
  // }

  // sortResult(prop,asc){
  //   this.CategoryList = this.CategoryListWithoutFilter.sort(function(a,b){
  //     if(asc){
  //         return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
  //     }else{
  //       return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
  //     }
  //   })
  // }

}
