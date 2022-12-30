import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public editUser(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/update', credentials);
  }

  public getUsers() {
    return this.http.get(sharedConsts.API_ENDPOINT + '/user/getUsers');
  }

  public getUser(id: String) {
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
