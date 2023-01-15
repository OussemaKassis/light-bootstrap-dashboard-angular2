import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'app/services/classe/classe.service';
import { UsersService } from 'app/services/users/users.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {

  classe: any = {
    nom: "",
    departement: "",
    niveau: "",
    nbrEtudients: "",
    teacherId: "",
    matieres: [],
    matiereVal: "",
  }

  matiere: any = {
    nom: ""
  }

  users:any = [];
  matieres:any = null;

  constructor(private userService: UsersService, private classeService: ClasseService) { }

  ngOnInit(): void {
    this.getTeachers();
    this.getMatieres();
  }

  getTeachers() {
    this.userService.getUsers().subscribe({
      next: (event: any) => {
        Object.entries(event).forEach((element: any) => {
          if(element[1].role == 'TEACHER') {
            this.users.push(element[1]);
          }
        });
      },
      error: err => {
        alert('user could not be added');
      },
      complete: () => {
        
      }
    })
  }

  getMatieres() {
    this.classeService.getMatieres().subscribe({
      next: (event: any) => {
        this.matieres = event;
      },
      error: err => {
        alert('no matieres');
      },
      complete: () => {
      }
    })
  }

  createClasse() {
    let matieres = this.classe.matiereVal;
    let matiere = {
      nom: matieres.split('/')[1],
      id: matieres.split('/')[0]
    }
    this.classe.matieres.push(matiere);
    console.log(this.classe);
    this.classeService.addClasse(this.classe).subscribe({
      next: (event: any) => {
        console.log(event);
      },
      error: err => {
        alert('error create classe');
      },
      complete: () => {
      }
    })
  }

  createMatiere() {
    if(this.matiere.nom != "") {
      this.classeService.addMatiere(this.matiere).subscribe({
        next: (event: any) => {
          this.getMatieres();
        },
        error: err => {
          alert('error create classe');
        },
        complete: () => {
          this.getMatieres();
          this.matiere.nom = "";
        }
      })
    }
  }

}
