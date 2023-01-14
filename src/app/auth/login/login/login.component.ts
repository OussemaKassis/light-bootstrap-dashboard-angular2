import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth/service/auth.service';

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

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    localStorage.setItem('connected', 'false');
    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }

  submit() {
    console.log(this.cred);
    this.auth.login(this.cred).subscribe({
      next: (event: any) => {
        localStorage.setItem('role',event.user.role);
        localStorage.setItem('name',event.user.firstName + ' ' + event.user.lastName);
        localStorage.setItem('id',event.user.id);
        localStorage.setItem('connected', 'true');
        this.router.navigate(['./dashboard']);
      },
      error: err => {
        alert('could not connect');
      },
      complete: () => {
      
      }
    });

    
  }

}
