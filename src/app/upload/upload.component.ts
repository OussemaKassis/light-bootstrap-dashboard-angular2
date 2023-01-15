import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'app/services/classe/classe.service';
import { TirageService } from 'app/services/tirage/tirage.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  classes: any = {
    nom:  "",
    id: ""
  }

  tirage: any = {
    date:  "",
    filePath: "",
    teacherId: "",
    classeId: ""
  }

  classeId: string = "";

  id : string = "";

  constructor(private classeService: ClasseService, private tirageService: TirageService, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.getClasses();
  }

  submit() {
    var dt = "";
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    dt = mm + '/' + dd + '/' + yyyy;
    this.tirage.date = dt;
    this.tirage.teacherId= this.id;
    this.tirage.classeId = this.classeId;
    console.log(this.tirage);
    
    this.tirageService.createTirage(this.tirage).subscribe({
      next: (event) => {
        this.router.navigate(['./dashboard']);
      },
      error: (err) => {
        alert('error tirage');
      },
      complete: () => {

      }
    })
  }

  getClasses() {
    this.classeService.getClasses().subscribe({
      next: (event) => {
        //todo
      },
      error: (error) => {

      },
      complete: () => {

      },
    })
  }

}
