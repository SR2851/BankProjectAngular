import { Component, OnInit } from '@angular/core';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {
listCompte: Compte[]=[];
newCompte: Compte = new Compte();

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.compteService.getAll().subscribe(
      data => {
        this.listCompte=data;
      }
    )
  }
  deleteCompte(idCompte: number, numeroCompte: String, libelle: String) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "Suppression d'un compte!",
      text: "Voulez-vous vraiment supprimer le compte "+numeroCompte+" "+libelle+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.compteService.deleteCompte(idCompte).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              "Le compte "+numeroCompte+" "+libelle+" a été supprimé.",
              'success'
              
            ).then( () => {
              window.location.href = "http://localhost:4200/compte/list"
            })
            
          }
        )
        


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          "Le compte "+numeroCompte+" "+libelle+" est sauvegardé.",
          'error'
        ).then( () => {
          window.location.href = "http://localhost:4200/compte/list"
        })
        
      }
      
    })
    
  }
}
