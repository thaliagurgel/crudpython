import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-comp',
  templateUrl: './add-edit-comp.component.html',
  styleUrls: ['./add-edit-comp.component.css']
})
export class AddEditCompComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() comp:any;
  CompanyId:string | undefined;
  CompanyName:string | undefined;
  CompanyCNPJ: string | undefined;
  CompanyAdress: string | undefined;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.CompanyId=this.comp.CompanyId;
    this.CompanyName=this.comp.CompanyName;
    this.CompanyCNPJ = this.comp.CompanyCNPJ;
    this.CompanyAdress = this.comp.CompanyAdress;
  }


  addCompany(){
    var val = {CompanyId:this.CompanyId,
                CompanyName:this.CompanyName,
                CompanyCNPJ:this.CompanyCNPJ,
                CompanyAdress:this.CompanyAdress
              };

    this.service.addCompany(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCompany(){
    var val = {CompanyId:this.CompanyId,
      CompanyName:this.CompanyName,
      CompanyCNPJ:this.CompanyCNPJ,
      CompanyAdress:this.CompanyAdress}


    this.service.updateCompany(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
