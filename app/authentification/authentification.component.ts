import { Component, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { UserService } from '../Service/user.service';
import Swal from 'sweetalert2';
import { Login } from '../Model/Login';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
user: Login=new Login();
userLoggedIn: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  login(){
  this.userService.login(this.user).subscribe(
    data =>{
      if(data){
      this.userLoggedIn=data;
      localStorage.setItem("user", this.userLoggedIn.identifiant);
    localStorage.setItem("role","Client");
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Authentification réussie!',
      showConfirmButton: true,
      timer: 1500
    }).then( () => {
      window.location.href = "http://localhost:4200/homepage"
    })
  }
    }
  )
  }
  logOut(){
    localStorage.clear();
  }
}
