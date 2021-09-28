import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-comp',
  templateUrl: './show-comp.component.html',
  styleUrls: ['./show-comp.component.css']
})
export class ShowCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  CompanyList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditCompComp:boolean=false;
  comp:any;

  ngOnInit(): void {
    this.refreshCompList();
  }

  addClick(){
    this.comp={
      CompanyId:0,
      CompanyName:"",
      CompanyCNPJ:"",
      CompanyAdress: ""

    }
    this.ModalTitle="Add Empresa";
    this.ActivateAddEditCompComp=true;

  }

  editClick(item: any){
    console.log(item);
    this.comp=item;
    this.ModalTitle="Edit Empresa";
    this.ActivateAddEditCompComp=true;
  }

  deleteClick(item: { CompanyId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteCompany(item.CompanyId).subscribe(data=>{
        alert(data.toString());
        this.refreshCompList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCompComp=false;
    this.refreshCompList();
  }


  refreshCompList(){
    this.service.getCompanyList().subscribe(data=>{
      this.CompanyList=data;
    });
  }

}


