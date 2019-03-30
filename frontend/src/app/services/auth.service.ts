import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, filter, debounce, tap} from "rxjs/operators"
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  checkCredentials() {
    return sessionStorage.getItem('token')
  }

  login(loginData: any) {
    let headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa(loginData.username + ":" + loginData.password))

    // this.http.get( environment.appContext + '/login', {headers: headers})
    //   .pipe(map(user => console.log("user")));

    return this.http.get(environment.appContext + '/login', {headers: headers});
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
