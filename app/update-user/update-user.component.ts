import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { Role } from '../Model/Role';
import { UserService } from '../Service/user.service';
import { RoleService } from '../Service/role.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
newUser: User=new User();
listRole: Role[]=[];
  idUserURL: number;
  

  constructor(private userService:UserService, private roleService:RoleService, private route: ActivatedRoute) { this.idUserURL = parseInt(this.route.snapshot.paramMap.get('id'));}
  compareFn(u1: User, u2: User) {
    return u1 && u2 ? u1.idUser === u2.idUser : u1 === u2;
}
  ngOnInit(): void {
    console.log(this.idUserURL)

    this.userService.getById(this.idUserURL).subscribe(
      data =>{
        this.newUser=data;
      }
    )

this.roleService.getAll().subscribe(
  data => {
    this.listRole=data;
  }
)
  }

updateUser(idUser:number, newUser:User){
  this.userService.updateUser(idUser, newUser).subscribe(
    data => {
      if (data['idUser'] == 0){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          
        })
      }
      else if(data['idUser']){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Utilisateur mis à jour!',
          showConfirmButton: true,
          timer: 1500
        }).then( () => {
          window.location.href = "http://localhost:4200/user/list"
        })
      }
    }
  )
}
}
