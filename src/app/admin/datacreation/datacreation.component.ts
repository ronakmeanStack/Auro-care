import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import{ResearchdataService} from '../../services/research.service'
import 'rxjs/add/operator/map';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormControl, FormGroup} from '@angular/forms';
declare let require: any;
declare var $: any;


@Component({
  selector: 'app-datacreation',
  templateUrl: './datacreation.component.html',
  styleUrls: ['./datacreation.component.css']
})
export class DatacreationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
   data=[];
   datas=[{"name":'ronak',"age":'22',"male":'yes'}]
  constructor(private researchdataService:ResearchdataService,
  	 private spinner: NgxSpinnerService) { }

  ngOnInit() {
 this.spinner.show();

 this.dtOptions = {
      pagingType: 'full_numbers',
      };

  	this.researchdataService.getsearchArt()
  	 .subscribe((res) => {
             this.data = res;
             console.log("datas",this.data)
               this.dtTrigger.next();
               this.spinner.hide();
           });


  }

  createForm=new FormGroup({
  	name: new FormControl(),
  	key: new FormControl(),
  	criteria: new FormControl()
  })

  editForm=new FormGroup({
  	name: new FormControl(),
  	key: new FormControl(),
  	criteria: new FormControl()
  })

closemodal(){
	$('#createmodal').hide();
	$('#editmodal').hide();
}
reserform(){
	this.createForm.reset();
	this.editForm.reset();
}


createmasterdata(){
	 $('#createmodal').show();
}
createdata(){
	console.log("data",this.createForm.value)
}
editmasterdata(editdata){
      $('#editmodal').show();
      console.log("---edited data is here",editdata)
}
editdata(){
	
}
archivemasterdata(){

}


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
