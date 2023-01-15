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
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('name');



    $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
  }

  submit() {
    console.log(this.cred);
    this.auth.login(this.cred).subscribe({
      next: (event: any) => {
        if(!(event === null || event === "")) {
          localStorage.setItem('role',event.role);
          localStorage.setItem('name',event.nom + ' ' + event.prenom);
          localStorage.setItem('id',event.id);
          localStorage.setItem('connected', 'true');
          this.router.navigate(['./dashboard']);
        }else {
          alert('user not found');
        }
      },
      error: err => {
        alert('could not connect');
      },
      complete: () => {

      }
    });

    
  }

}
