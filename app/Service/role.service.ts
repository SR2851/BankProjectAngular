import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../Model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()
  }
  addRole(Role : Role){
    return this.http.post<Role>('http://localhost:8080/role',Role).pipe()
    //envoie moi la requette post sur postmann avec Role comme corps de reuette
  }
  
  getById(idRole: number){
return this.http.get<Role>('http://localhost:8080/role/findById/'+idRole).pipe()
  }
}
