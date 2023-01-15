import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public editUser(credentials: any) {
    return this.http.put(sharedConsts.API_ENDPOINT + '/user/update', credentials);
  }

  public getUsers() {
    return this.http.get(sharedConsts.API_ENDPOINT + '/user/users');
  }

  public getUser(id: String) {
    return this.http.get(sharedConsts.API_ENDPOINT + '/user/users/'+id);
  }

  public addUser(credentials) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/save/', credentials);
  }

  public addTeacher(credentials) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/teacher/save/', credentials);
  }

  public deleteUser(id: String) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/delete/'+id, id);
  }

  public login(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/login', credentials);
  }

  //tobefixed
  public changeUserStatus(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/changeStatus', credentials);
  }
}
