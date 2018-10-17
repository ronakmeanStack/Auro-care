import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//ngx bootstrap
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
//routing
import { adminRoute } from './admin.routing';
import { CreateuserComponent } from './createuser/createuser.component';
import { PermissiontableComponent } from './permissiontable/permissiontable.component';
import { HomeComponent } from './home/home.component';
import { DatacreationComponent } from './datacreation/datacreation.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoute),FormsModule,ReactiveFormsModule,
  TypeaheadModule.forRoot(),AccordionModule.forRoot(),NgxSpinnerModule,
  DataTablesModule],
  declarations: [AdminComponent, CreateuserComponent, PermissiontableComponent, HomeComponent, DatacreationComponent]
})
export class AdminModule {}
