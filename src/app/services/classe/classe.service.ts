import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  public addMatiere(matiere) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/classe/matiere/save', matiere);
  }

  public getMatieres() {
    return this.http.get(sharedConsts.API_ENDPOINT + '/classe/matiere/');
  }

  public editClasse(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/classe/update', credentials);
  }

  public getClasses() {
    alert('im heeeeeere');
    return this.http.get('http://192.168.191.73:9000/classe');
  }

  public addClasse(classe: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/classe/save', classe);
  }

  
  //tobefixed
  public changeUserStatus(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/classe/changeStatus', credentials);
  }
}
