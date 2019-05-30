import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/ticket');
  }

  save(ticket: any) {
    return this.http.post(environment.appContext + '/ticket', ticket);
  }

  getTicket(id: any) {
    return this.http.get(environment.appContext + '/ticket/' + id);
  }

  update(ticket: any) {
    return this.http.put(environment.appContext + '/ticket', ticket);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/ticket/' + id);
  }

  getTicketsForActiveClients() {
    return this.http.get(environment.appContext + '/ticket/activeClients');
  }
}
