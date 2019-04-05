import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get(environment.appContext + '/role/list');
  }

}
