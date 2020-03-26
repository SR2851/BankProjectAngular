import { Component, OnInit } from '@angular/core';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import Swal from 'sweetalert2';
import { User } from '../Model/User';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
newCompte: Compte = new Compte();
listUser: User[]=[];

  constructor(private compteService: CompteService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUser=data;
      }
    )
  }

  addCompte(compte: Compte){
    this.compteService.addCompte(this.newCompte).subscribe(
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
            title: 'Compte ajouté!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/compte"
          })
        }
      }
    )
  }
}
