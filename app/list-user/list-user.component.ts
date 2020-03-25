import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUser: User[]=[];
newUser: User=new User();
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data =>{
        this.listUser=data;
      }
    )
  }
  deleteUser(idUser: number, prenomUser: String, nomUser: String) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: "Suppression d'un utilisateur!",
      text: "Voulez-vous vraiment supprimer l'utilisateur "+prenomUser+" "+nomUser+"?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser(idUser).subscribe(
          data => {
            swalWithBootstrapButtons.fire(
              'Supprimé!',
              "L'utilisateur "+prenomUser+" "+nomUser+" a été supprimé.",
              'success'
              
            ).then( () => {
              window.location.href = "http://localhost:4200/user"
            })
            
          }
        )
        


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          "L'utilisateur "+prenomUser+" "+nomUser+" est sauvegardé.",
          'error'
        ).then( () => {
          window.location.href = "http://localhost:4200/user"
        })
        
      }
      
    })
    
  }
}
