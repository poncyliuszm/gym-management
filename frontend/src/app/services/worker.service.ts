import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class WorkerService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/worker/list');
  }

  save(worker: any) {
    return this.http.post(environment.appContext + '/worker', worker);
  }

  getWorker(id: any) {
    return this.http.get(environment.appContext + '/worker/' + id);
  }

  update(worker: any) {
    return this.http.put(environment.appContext + '/worker', worker);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/worker/' + id);
  }
}
