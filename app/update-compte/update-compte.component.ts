import { Component, OnInit } from '@angular/core';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
newCompte: Compte = new Compte();
  idCompteURL: number;

  constructor(private compteService: CompteService, private route: ActivatedRoute) { this.idCompteURL = parseInt(this.route.snapshot.paramMap.get('id'));}
  compareFn(u1: Compte, u2: Compte) {
    return u1 && u2 ? u1.idCompte === u2.idCompte : u1 === u2;
}

  ngOnInit(): void {
    console.log(this.idCompteURL)

    this.compteService.getById(this.idCompteURL).subscribe(
      data =>{
        this.newCompte=data;
      }
    )
  }
  updateCompte(idCompte:number, newCompte:Compte){
    this.compteService.updateCompte(idCompte, newCompte).subscribe(
      data => {
        if (data['idCompte'] == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        }
        else if(data['idCompte']){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compte mis à jour!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/compte/list"
          })
        }
      }
    )
  }
}
