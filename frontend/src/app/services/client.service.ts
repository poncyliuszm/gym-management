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

  getActiveClients() {
    return this.http.get(environment.appContext + '/client/getActiveClients');
  }

  save(user: any) {
    return this.http.post(environment.appContext + '/client/save', user);
  }

  getClient(id: any) {
    return this.http.get(environment.appContext + '/client/' + id);
  }

  update(client: any) {
    return this.http.put(environment.appContext + '/client', client);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/client/' + id);
  }
}
