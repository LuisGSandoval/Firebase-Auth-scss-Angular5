import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public password:string;
  public email : string;
  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.LoginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/privado'])
    })
    .catch( (err) =>{
      console.log(err);
      alert("There was an error, please try again")
      this.router.navigate(['/login']);
    });
  }
}
