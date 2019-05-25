import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ExerciseTypeService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/exerciseType');
  }

  getActiveExerciseTypes() {
    return this.http.get(environment.appContext + '/exerciseType/getActiveExerciseTypes');
  }

  save(exerciseType: any) {
    return this.http.post(environment.appContext + '/exerciseType', exerciseType);
  }

  getMeasurementType(id: any) {
    return this.http.get(environment.appContext + '/exerciseType/' + id);
  }

  update(exerciseType: any) {
    return this.http.put(environment.appContext + '/exerciseType', exerciseType);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/exerciseType/' + id);
  }

}
