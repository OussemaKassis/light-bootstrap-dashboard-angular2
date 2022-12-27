import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('connected', 'false');
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }

  submit() {
    console.log(this.cred);
    localStorage.setItem('connected', 'true');
  }

}
