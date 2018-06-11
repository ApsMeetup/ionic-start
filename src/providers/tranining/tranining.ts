import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../config/environment';

/*
  Generated class for the TraniningProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TraniningProvider {

  constructor(public http: HttpClient) {

  }

  public getAll() {
    return this.http.get(environment.API_URL);
  }
}
