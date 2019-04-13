import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TicketTypeService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/ticketType');
  }

  save(ticketType: any) {
    return this.http.post(environment.appContext + '/ticketType', ticketType);
  }

  getTicketType(id: any) {
    return this.http.get(environment.appContext + '/ticketType/' + id);
  }

  update(ticketType: any) {
    return this.http.put(environment.appContext + '/ticketType', ticketType);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/ticketType/' + id);
  }

}
