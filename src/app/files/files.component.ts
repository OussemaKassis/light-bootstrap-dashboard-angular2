import { Component, OnInit } from '@angular/core';
import { TirageService } from 'app/services/tirage/tirage.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

    constructor(private tirageService: TirageService) { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'ID', 'Date', 'Enseignant', 'Classe', 'Nombre copies', 'Statut', 'Action'],
            dataRows: [

            ]
        };

        this.tirageService.getTirages().subscribe({
            next: (event: any) => {
                Object.entries(event).forEach((element: any) => {
                    this.tableData1.dataRows.push(
                        [
                            element[1].id,
                            element[1].date,
                            element[1].teacherDto.nom,
                            element[1].classeDto.nom,
                            element[1].classeDto.nbrEtudients,
                            element[1].status,
                            '<a href="'+element[1].filePath+'"> Télécharger </a>'
                        ]
                    );
                });
            },
            error: err => {
                alert('no demands found!');
            },
            complete: () => {
            }
        });

    }

}
