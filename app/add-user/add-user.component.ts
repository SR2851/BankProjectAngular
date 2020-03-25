import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { Role } from '../Model/Role';
import { UserService } from '../Service/user.service';
import { RoleService } from '../Service/role.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
newUser: User = new User();
listRole: Role[]=[];

  constructor(private userService: UserService, private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe(
      data =>{
        this.listRole=data;
      }
    )
  }
  addUser() {
    this.userService.addUser(this.newUser).subscribe(
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
            title: 'Utilisateur ajouté!',
            showConfirmButton: true,
            timer: 1500
          }).then( () => {
            window.location.href = "http://localhost:4200/user"
          })
        }
      }
    )
  }
}
