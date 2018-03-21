import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public islogged : boolean;
  public userName: string;
  public email: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.islogged=true;
        this.userName = auth.displayName;
        this.email = auth.email;
      }else{
        this.islogged = false;
      } 
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigate['/login']    
  }

}
