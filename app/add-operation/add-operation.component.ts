import { Component, OnInit } from '@angular/core';
import { Operation } from '../Model/Operation';

import { OperationService } from '../Service/Operation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.css']
})
export class AddOperationComponent implements OnInit {
newOperation: Operation= new Operation();
newOperation1: Operation = new Operation();
newOperation2: Operation = new Operation();
listOperation: Operation[]=[];
  

  constructor(private operationService: OperationService, private OperationService:OperationService) { }

  ngOnInit(): void {
    this.OperationService.getAll().subscribe(
      data => {
        this.listOperation=data;
      }
    )
  }
  addOperation(Operation: Operation){
    this.OperationService.addOperation(this.newOperation).subscribe(
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
            window.location.href = "http://localhost:4200/Operation"
          })
        }
      }
    )
  }
}
