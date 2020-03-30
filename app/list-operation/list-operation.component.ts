import { Component, OnInit } from '@angular/core';
import { Operation } from '../Model/Operation';
import { Compte } from '../Model/Compte';
import { CompteService } from '../Service/Compte.service';
import { OperationService } from '../Service/Operation.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-list-operation',
  templateUrl: './list-operation.component.html',
  styleUrls: ['./list-operation.component.css']
})
export class ListOperationComponent implements OnInit {
newOperation: Operation= new Operation();
listOperation: Operation[]=[];
newCompte: Compte=new Compte();
  idCompteURL: number;
  
  

  constructor(private compteService: CompteService, private operationService: OperationService, private route: ActivatedRoute) {this.idCompteURL = parseInt(this.route.snapshot.paramMap.get('id'));}
  

  ngOnInit(): void {
    console.log(this.idCompteURL)
    
    this.operationService.getByCompte1(this.idCompteURL).subscribe(
      
      data => {
        
        this.listOperation=data;
      }
    )
    this.operationService.getByCompte2(this.idCompteURL).subscribe(
      
      data => {
        
        this.listOperation=data;
      }
    )
  }

}
