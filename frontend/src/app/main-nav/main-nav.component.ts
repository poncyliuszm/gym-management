import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from "@angular/material";
import {DeleteClientDialog} from "../clients/clients.component";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  currentUser;

  constructor(private breakpointObserver: BreakpointObserver,
              public router: Router,
              public authService: AuthService,
              private dialog: MatDialog) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  toggleSidenav() {
    this.sidenav.toggle();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  changePasswordDialog() {
    const dialogRef = this.dialog.open(DialogChangePassword, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {

    })
  }
}

@Component({
  selector: 'dialog-change-password',
  templateUrl: './change-password-dialog.html'
})
export class DialogChangePassword {
  changePassword;

  constructor(public dialogRef: MatDialogRef<DeleteClientDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private authService: AuthService,
              private matSnackBar: MatSnackBar) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.authService.changePassword(this.changePassword)
      .subscribe((data: any) => {
        this.matSnackBar.open("Pomyślnie zmieniono hasło", "Zamknij", {
          duration: 4000
        });
        let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

        // this.authService.login({
        //   "username": currentUser.username
        // })

        sessionStorage.setItem('token', btoa(currentUser.login + ":" + this.changePassword));
        this.dialogRef.close();
      });
  }

}
