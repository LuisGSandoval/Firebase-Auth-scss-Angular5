import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public password:string;
  public email : string;
  constructor(
    public router: Router, 
    public authService: AuthService,
    public flassMsg: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.LoginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/privado'])
    })
    .catch( (err) =>{
      this.flassMsg.show(err.message, { cssClass: "alert alert-danger mt-3", timeout:4000 });
      console.log(err);
      this.router.navigate(['/login']);
    });
  }


  googleLogin(){
    this.authService.loginGoole()
    .then( (res) =>{
      this.router.navigate(['/privado']);
    }).catch( (err) =>{
      this.flassMsg.show(err.message, {cssClass: "alert alert-danger", timeout: 4000})
    })
  }
}
