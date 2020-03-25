import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carte } from '../Model/Carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Carte[]>('http://localhost:8080/carte/list').pipe()
  }
  addCarte(Carte : Carte){
    return this.http.post<Carte>('http://localhost:8080/carte',Carte).pipe()
    //envoie moi la requette post sur postmann avec Carte comme corps de reuette
  }
  deleteCarte(idCarte : number){
    return this.http.delete<Carte>('http://localhost:8080/carte/delete/'+idCarte).pipe()
  }
  updateCarte(idCarte : number, Carte: Carte){
    return this.http.put<Carte>('http://localhost:8080/carte/update/'+idCarte, Carte).pipe()
  }
  getById(idCarte: number){
return this.http.get<Carte>('http://localhost:8080/carte/findById/'+idCarte).pipe()
  }
}
