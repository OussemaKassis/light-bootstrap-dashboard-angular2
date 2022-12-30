import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  public editClasse(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/update', credentials);
  }

  public addMatiere() {
    return this.http.get(sharedConsts.API_ENDPOINT + '/user/getUsers');
  }

  public addClasse(id: String) {
    return this.http.get(sharedConsts.API_ENDPOINT + '/user/getUser/'+id);
  }

  public deleteUser(id: String) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/delete/'+id, id);
  }

  //tobefixed
  public changeUserStatus(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/changeStatus', credentials);
  }
}
