import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Nom', 'Prenom', 'Email', 'Role', 'Statut', 'Action'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', 'Teacher', 'Active'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 'Teacher', 'Active'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', 'Teacher', 'Active'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', 'Teacher', 'Active'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 'Agent de tirage', 'Active'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', 'Teacher', 'Active']
          ]
      };
  }

}
