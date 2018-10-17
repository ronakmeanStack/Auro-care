import { Component, OnInit } from '@angular/core';
import {
 FormGroup,
 FormBuilder,
 Validators,
 FormControl
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private toastr:ToastrService,) {}

  ngOnInit() {}
  masterdatacreation = new FormGroup({
  	name:new FormControl(),
    keyword: new FormControl(),
    criteria: new FormControl()

  })

  save(){
  	console.log("-------",this.masterdatacreation.value)
  	this.clearform();
  }
  clearform(){
  	this.masterdatacreation.reset();
  }
}
