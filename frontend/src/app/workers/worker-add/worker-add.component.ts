import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WorkerService} from "../../services/worker.service";
import {MatSnackBar} from "@angular/material";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {

  worker = {
    name: "",
    login: "",
    roleId: "",
    surname: "",
    password: "",
    date: "",
    address: "",
    phone: "",
    email: ""
  };
  roles;

  constructor(private router: Router,
              private workerService: WorkerService,
              private roleService: RoleService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getRoles();
  }

  goBack() {
    this.router.navigate(['/workers']);
  }

  save(form) {
    if (form.valid) {
      this.workerService.save(this.worker)
        .subscribe((data: any) => {
          this.router.navigate(['/workers']);
          this.matSnackBar.open("Pomyślnie dodano pracownika", "Zamknij", {
            duration: 4000
          });
        });
    }
  }

  private getRoles() {
    this.roleService.getRoles()
      .subscribe((data: any) => {
        this.roles = data;
      })
  }
}
