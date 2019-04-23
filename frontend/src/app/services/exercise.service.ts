import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ExerciseService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/exercise');
  }

  save(exercise: any) {
    return this.http.post(environment.appContext + '/exercise', exercise);
  }

  getExercise(id: any) {
    return this.http.get(environment.appContext + '/exercise/' + id);
  }

  update(exercise: any) {
    return this.http.put(environment.appContext + '/exercise', exercise);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/exercise/' + id);
  }

}
