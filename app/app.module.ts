import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { AddCarteComponent } from './add-carte/add-carte.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { ListCarteComponent } from './list-carte/list-carte.component';
import { ListOperationComponent } from './list-operation/list-operation.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { UpdateOperationComponent } from './update-operation/update-operation.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddCompteComponent,
    AddCarteComponent,
    AddOperationComponent,
    AddRoleComponent,
    ListUserComponent,
    ListCompteComponent,
    ListCarteComponent,
    ListOperationComponent,
    ListRoleComponent,
    UpdateUserComponent,
    UpdateCompteComponent,
    UpdateCarteComponent,
    UpdateOperationComponent,
    UpdateRoleComponent,
    HeaderComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
