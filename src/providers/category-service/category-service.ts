import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {
  public API = 'http://localhost:8080';
  public CATEGORY_API = this.API + '/SharingIsCaring/categories';

  constructor(public http: Http) {
    console.log('Hello CategoryServiceProvider Provider');
  }

  getAllCategory(): Observable<any> {
    return this.http.get(this.CATEGORY_API)
      .map((response: Response) => response.json());
  }
}
