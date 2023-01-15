import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sharedConsts } from 'app/shared/shared.consts';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }

  public createTirage(credentials: any) {
    return this.http.post(sharedConsts.API_ENDPOINT + '/tirage/save', credentials);
  }

  public getTirages() {
    return this.http.get(sharedConsts.API_ENDPOINT + '/tirage');
  }

}
