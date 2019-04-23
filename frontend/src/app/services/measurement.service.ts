import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class MeasurementService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/measurement');
  }

  save(measurement: any) {
    return this.http.post(environment.appContext + '/measurement', measurement);
  }

  getMeasurement(id: any) {
    return this.http.get(environment.appContext + '/measurement/' + id);
  }

  update(measurement: any) {
    return this.http.put(environment.appContext + '/measurement', measurement);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/measurement/' + id);
  }

}
