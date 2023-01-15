import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'app/services/classe/classe.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  public tableData1: TableData;
    public tableData2: TableData;

    constructor(private classeService: ClasseService, private router: Router) { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'ID', 'Nom', 'Niveau', 'Departement', 'Nombres étudiants', 'Statut', 'Action'],
            dataRows: [
                
            ]
        };

        this.classeService.getClasses().subscribe({
          next: (event: any) => {
              Object.entries(event).forEach((element: any) => {
                  this.tableData1.dataRows.push(
                      [
                          element[1].id,
                          element[1].nom,
                          element[1].prenom,
                          element[1].email,
                          element[1].role,
                          element[1].status
                      ]);
              });
          },
          error: err => {
              alert('no classes found!');
          },
          complete: () => {
          }
      });
    }

}
