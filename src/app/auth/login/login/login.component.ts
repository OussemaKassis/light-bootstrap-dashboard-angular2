import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  cred: any = {
    email: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('connected', 'false');
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }

  submit() {
    console.log(this.cred);
    localStorage.setItem('connected', 'true');
    localStorage.setItem('role', 'admin');
    this.router.navigate(['./dashboard']);
  }

}
