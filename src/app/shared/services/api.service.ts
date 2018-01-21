import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string): Observable<Object> {
    return this.http.get(path);
  }

}
