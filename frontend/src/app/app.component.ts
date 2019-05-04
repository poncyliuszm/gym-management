import {Component} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-management';

  constructor(public router: Router,
              public authService: AuthService) {
    router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          if (this.authService.checkCredentials() && event.url != '/login') {
            if (isUndefined(authService.currentUser)) {
              authService.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            }
          }
        }
      }
    )
  }
}
