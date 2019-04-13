import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class PaymentTypeService {
  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(environment.appContext + '/paymentType');
  }

  save(paymentType: any) {
    return this.http.post(environment.appContext + '/paymentType', paymentType);
  }

  getPaymentType(id: any) {
    return this.http.get(environment.appContext + '/paymentType/' + id);
  }

  update(paymentType: any) {
    return this.http.put(environment.appContext + '/paymentType', paymentType);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/paymentType/' + id);
  }

}
