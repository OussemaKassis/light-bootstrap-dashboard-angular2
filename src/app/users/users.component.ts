import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'app/services/users/users.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public tableData1: TableData;

    constructor(private userService: UsersService, private router: Router) { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'ID', 'Nom', 'Prenom', 'Email', 'Role', 'Statut', 'Action'],

            dataRows: [
                // ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', 'Teacher', 'Active'],
                // ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 'Teacher', 'Active'],
                // ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', 'Teacher', 'Active'],
                // ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', 'Teacher', 'Active'],
                // ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 'Agent de tirage', 'Active'],
                // ['6', 'Mason Porter', 'Chile', 'Gloucester', 'Teacher', 'Active']
            ]
        };
        this.userService.getUsers().subscribe({
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
                alert('no users found!');
            },
            complete: () => {
            }
        });
    }

    editUser(id) {
        this.router.navigate(['./edit-user/'+id]);
    }

}
