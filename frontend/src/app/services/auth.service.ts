import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  currentUser;

  constructor(private http: HttpClient, private router: Router) {
  }

  checkCredentials() {
    return sessionStorage.getItem('token')
  }

  login(loginData: any) {
    let headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa(loginData.username + ":" + loginData.password))

    return this.http.get(environment.appContext + '/login', {headers: headers});
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return this.http.get(environment.appContext + '/worker/currentWorker');
  }

  changePassword(changePassword: any) {
    return this.http.post(environment.appContext + '/changePassword', changePassword);
  }
}
