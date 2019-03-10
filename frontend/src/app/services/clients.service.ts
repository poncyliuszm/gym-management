import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/client/list');
  }
}
