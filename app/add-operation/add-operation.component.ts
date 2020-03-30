import { Component, OnInit } from '@angular/core';
import { Operation } from '../Model/Operation';

import { OperationService } from '../Service/Operation.service';
import Swal from 'sweetalert2';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import { User } from '../Model/User';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {
newOperation: Operation= new Operation();
newUser: User=new User();
newCompte1: Compte = new Compte();
newCompte2: Compte = new Compte();
listCompte: Compte[]=[];
  

  constructor(private operationService: OperationService, private compteService:CompteService) { }

  ngOnInit(): void {
    this.compteService.getAll().subscribe(
      data => {
        this.listCompte=data;
      }
    )
  }
  addOperation(Operation: Operation){
    this.operationService.addOperation(this.newOperation).subscribe(
      data => {
        if (data['idOperation'] == 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            
          })
        }
        else if(data['idOperation']){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Operation effectuée!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/operation"
          })
        }
      }
    )
  }
}
