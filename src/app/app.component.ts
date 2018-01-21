import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private ROOT_API = 'https://api.github.com/users';

  loading = false;
  userProfile: Object;
  userRepos: Object[];
  errorMsg: string;

  constructor(private http: Http) { }

  onSearch(searchValue) {

    // Clear old Results
    this.clearResults();

    // Search User
    this.searchAPI(searchValue.value)
        .subscribe(
          result => {
            this.userProfile = result;
            console.log(this.userProfile);
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('Client-side error occured.');
              this.errorMsg = 'Client-side error occured.';
            } else {
              console.log('Server-side error occured.');
              this.errorMsg = 'Server-side error occured.';
            }
          }
        );

  }

  viewRepos(userlogin) {

    if (this.userProfile !== undefined) {

      this.searchAPI(`${userlogin}/repos`)
          .subscribe(
            result => {
              this.userRepos = result;
              console.log(this.userRepos);
            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log('Client-side error occured.');
                this.errorMsg = 'Client-side error occured.';
              } else {
                console.log('Server-side error occured.');
                this.errorMsg = 'Server-side error occured.';
              }
            }
          );

    }

  }

  clearResults() {
    this.userProfile = undefined;
    this.userRepos = undefined;
  }

  searchAPI(apiPath): Observable<any[]> {
    return this.http.get(`${this.ROOT_API}/${apiPath}`).map((res: Response) => res.json());
  }


}
