import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/getUser', credentials);
  }

  register(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/user/save', credentials);
  }
}
