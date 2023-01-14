import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'app/services/users/users.service';
import { alertcenter } from 'googleapis/build/src/apis/alertcenter';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cred: any = {
    id: "",
    nom: "",
    prenom: "",
    email: "",
    role: "",
    password: ""
  }
  editId: string = "";

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
          this.editId = params['id'];
          this.userService.getUser(this.editId).subscribe({
            next: (event: any) => {
              this.cred.id= event.id;
              this.cred.nom= event.nom;
              this.cred.prenom= event.prenom;
              this.cred.email= event.email;
              this.cred.role= event.role;
              this.cred.password= event.password;
              let nom = document.getElementById('nom') as HTMLInputElement;
              setTimeout(() => {
                nom.value=event.nom;
              }, 50);

              let prenom = document.getElementById('prenom') as HTMLInputElement;
              setTimeout(() => {
                prenom.value=event.prenom;
              }, 50);

              let email = document.getElementById('email') as HTMLInputElement;
              setTimeout(() => {
                email.value=event.email;
              }, 50);

              let password = document.getElementById('password') as HTMLInputElement;
              setTimeout(() => {
                password.value=event.password;
              }, 50);

            },
            error: err => {
              alert("Couldn't get user info");
            },
            complete: () => {
              console.log(this.cred);
            }
          })
      }
    });
  }

  submit() {
    if(this.editId == "") {
      if(this.cred.role == '..' && this.cred.role == '') {
        alert('please choose a role');
      }
      else if(this.cred.role == 'enseignant') {
        this.userService.addTeacher(this.cred).subscribe({
          next: (event: any) => {
            alert('user have been added successfully!');
            this.router.navigate(['./users']);
          },
          error: err => {
            alert('user could not be added');
          },
          complete: () => {
            this.cred= {
              nom: "",
              prenom: "",
              email: "",
              role: "",
              password: ""
            }
          }
        });
      }
      else {
        this.userService.addUser(this.cred).subscribe({
          next: (event: any) => {
            alert('user have been added successfully!');
            this.router.navigate(['./users']);
          },
          error: err => {
            alert('user could not be added');
          },
          complete: () => {
            this.cred= {
              nom: "",
              prenom: "",
              email: "",
              role: "",
              password: ""
            }
          }
        });
      }
    }else {

      this.userService.editUser(this.cred).subscribe({
        next: (event: any) => {
          // backend remove "!" from update function in user service
          alert("Update success!");
          this.router.navigate(['./users']);
        },
        error: err => {
          alert("user couldn't be updated");
        },
        complete: () => {

        }
      })
    }
    
  }

}
