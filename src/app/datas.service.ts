import { Injectable } from '@angular/core';
import { Data } from './data';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasService {

private url = "/api/datas";

  constructor(private http: Http) { }

  getDatas() {
    return this.http.get(this.url)
      .map((response: Response) => response.json());
  }

}
