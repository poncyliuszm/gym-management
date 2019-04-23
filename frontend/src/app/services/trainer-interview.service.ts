import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class TrainerInterviewService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/trainerInterview');
  }

  save(trainerInterview: any) {
    return this.http.post(environment.appContext + '/trainerInterview', trainerInterview);
  }

  getTrainerInterview(id: any) {
    return this.http.get(environment.appContext + '/trainerInterview/' + id);
  }

  update(trainerInterview: any) {
    return this.http.put(environment.appContext + '/trainerInterview', trainerInterview);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/trainerInterview/' + id);
  }

}
