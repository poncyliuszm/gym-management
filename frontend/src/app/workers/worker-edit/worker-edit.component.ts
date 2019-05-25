import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {WorkerService} from "../../services/worker.service";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  worker = {
    name: "",
    login: "",
    roleId: "",
    surname: "",
    password: "",
    date: "",
    address: "",
    phone: "",
    email: "",
    status: ""
  };
  workerId;
  roles;


  constructor(private router: Router,
              private workerService: WorkerService,
              private activatedRoute: ActivatedRoute,
              private roleService: RoleService,
              private matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getRoles();
    this.activatedRoute.params.subscribe(params => {
      this.workerId = +params['id'];
      this.workerService.getWorker(this.workerId)
        .subscribe((worker: any) => {
          this.worker = worker;
        })
    });

  }

  goBack() {
    this.router.navigate(['/workers']);
  }

  save(form) {
    if (form.valid) {
      this.workerService.update(this.worker)
        .subscribe((data: any) => {
          this.router.navigate(['/workers']);
          this.matSnackBar.open("Pomyślnie zaktualizowano pracownika", "Zamknij", {
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
