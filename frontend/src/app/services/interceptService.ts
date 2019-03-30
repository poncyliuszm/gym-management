import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {LoaderService} from "./LoaderService";

@Injectable()
export class InterceptService implements HttpInterceptor {
  constructor(private router: Router, private loaderService: LoaderService) {
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    setTimeout(() => this.loaderService.display(true));
    if (!request.url.includes('/login')) {

      const token: string = sessionStorage.getItem('token');

      if (token) {
        request = request.clone({headers: request.headers.set('Authorization', 'Basic ' + token)});
      }

      request = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + token
        }
      });


    }
    return next.handle(request);
  }
}
