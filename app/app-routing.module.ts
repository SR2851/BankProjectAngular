import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddCarteComponent } from './add-carte/add-carte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListCarteComponent } from './list-carte/list-carte.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { ListOperationComponent } from './list-operation/list-operation.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { UpdateOperationComponent } from './update-operation/update-operation.component';



const routes: Routes = [
  {
    path: "user",
    component: AddUserComponent
  },
  {
    path: "role",
    component: AddRoleComponent
  },
  {
    path: "carte",
    component: AddCarteComponent
  },
  {
    path: "compte",
    component: AddCompteComponent
  },
  {
    path: "operation",
    component: AddOperationComponent
  },
  {
    path: "user/list",
    component: ListUserComponent
  },
  {
    path: "role/list",
    component: ListRoleComponent
  },
  {
    path: "carte/list",
    component: ListCarteComponent
  },
  {
    path: "compte/list/:id",
    component: ListCompteComponent
  },
  
  
  
  {
    path: "operation/list",
    component: ListOperationComponent
  },
  {
    path: "user/update/:id",
    component: UpdateUserComponent
  },
  {
    path: "role/update/:id",
    component: UpdateRoleComponent
  },
  {
    path: "carte/update/:id",
    component: UpdateCarteComponent
  },
  {
    path: "compte/update/:id",
    component: UpdateCompteComponent
  },
  {
    path: "operation/update/:id",
    component: UpdateOperationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
