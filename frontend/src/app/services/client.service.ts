import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/client/list');
  }

  save(user: any) {
    return this.http.post(environment.appContext + '/client/save', user);
  }
}
