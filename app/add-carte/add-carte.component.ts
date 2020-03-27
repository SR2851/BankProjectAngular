import { Component, OnInit } from '@angular/core';
import { Carte } from '../Model/Carte';
import { User } from '../Model/User';
import { CarteService } from '../Service/carte.service';
import { UserService } from '../Service/user.service';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-carte',
  templateUrl: './add-carte.component.html',
  styleUrls: ['./add-carte.component.css']
})
export class AddCarteComponent implements OnInit {
newCarte: Carte=new Carte();
listUser: User[]=[];
newUser: User = new User();
listCompte: Compte[]=[];

  constructor(private carteService: CarteService, private userService: UserService, private compteService: CompteService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUser=data
        
      }
      
    )
    this.compteService.getByUsers(this.newUser.idUser).subscribe(
      data => {
        this.listCompte=data
      }
      
    )
    

  }
  addCarte(carte: Carte){
    this.carteService.addCarte(this.newCarte).subscribe(
      data => {
        if (data['idCarte'] == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        }
        else if(data['idCarte']){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Carte ajoutée!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/carte"
          })
        }
      }
    )
  }
}
