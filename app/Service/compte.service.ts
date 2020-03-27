import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../Model/Compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Compte[]>('http://localhost:8080/compte/all').pipe()
  }
  addCompte(Compte : Compte){
    return this.http.post<Compte>('http://localhost:8080/compte/create',Compte).pipe()
    //envoie moi la requette post sur postmann avec Compte comme corps de reuette
  }
  deleteCompte(idCompte : number){
    return this.http.delete<Compte>('http://localhost:8080/compte/delete/'+idCompte).pipe()
  }
  updateCompte(idCompte : number, Compte: Compte){
    return this.http.put<Compte>('http://localhost:8080/compte/update/'+idCompte, Compte).pipe()
  }
  getById(idCompte: number){
return this.http.get<Compte>('http://localhost:8080/compte/findById/'+idCompte).pipe()
  }
  getByUser(idUser: number){
    return this.http.get<Compte[]>('http://localhost:8080/compte/compteByUser/'+idUser).pipe()
  }
  getByUsers(idUser: number){
    return this.http.get<Compte[]>('http://localhost:8080/compte/compteByUsers').pipe()
  }
}
