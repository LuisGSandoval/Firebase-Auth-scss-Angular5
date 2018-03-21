import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService : AuthService, 
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }


  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.flashMessage.show('Usuario creado correctamente', {cssClass: 'alert alert-success mt-3', timeout: 4000});
      this.router.navigate(['/privado']);
     console.log("Bien!!")
     console.log(res)
    }).catch( (err) =>{
      this.flashMessage.show(err.message, {cssClass: "alert alert-danger mt-3"})
      console.log("El error fue: "+ err)
    });
  }
}
