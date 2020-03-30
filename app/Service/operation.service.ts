import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../Model/Operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Operation[]>('http://localhost:8080/operation/list').pipe()
  }
  addOperation(Operation : Operation){
    return this.http.post<Operation>('http://localhost:8080/operation/create',Operation).pipe()
    //envoie moi la requette post sur postmann avec Operation comme corps de reuette
  }
 
  getById(idOperation: number){
return this.http.get<Operation>('http://localhost:8080/operation/findById/'+idOperation).pipe()
  }
  getByCompte1(idCompte: number){
    return this.http.get<Operation[]>('http://localhost:8080/operation/operationByCompte1/'+idCompte).pipe()
  }
  getByCompte2(idCompte: number){
    return this.http.get<Operation[]>('http://localhost:8080/operation/operationByCompte2/'+idCompte).pipe()
  }
}
