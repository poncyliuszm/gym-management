import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class MeasurementTypeService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/measurementType');
  }

  save(measurementType: any) {
    return this.http.post(environment.appContext + '/measurementType', measurementType);
  }

  getMeasurementType(id: any) {
    return this.http.get(environment.appContext + '/measurementType/' + id);
  }

  update(measurementType: any) {
    return this.http.put(environment.appContext + '/measurementType', measurementType);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/measurementType/' + id);
  }

}
