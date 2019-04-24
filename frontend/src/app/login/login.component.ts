import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  loginForm = new FormControl('', [
    Validators.required
  ]);

  passwordForm = new FormControl('', [
    Validators.required
  ]);

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
      .subscribe((user: any) => {
        if (user) {
          sessionStorage.setItem('token', btoa(this.model.username + ":" + this.model.password));

          this.authService.getCurrentUser()
            .subscribe((data: any) => {
              sessionStorage.setItem('currentUser', JSON.stringify(data));
            });

          this.router.navigate(['/home']);
          return user;
        }

      })
  }

}
