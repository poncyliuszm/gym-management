import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {TrainerViewService} from "../services/trainer-view.service";

@Component({
  selector: 'app-trainer-view',
  templateUrl: './trainer-view.component.html',
  styleUrls: ['./trainer-view.component.css']
})
export class TrainerViewComponent implements OnInit {

  displayedColumns: string[] =
    ['position', 'name', 'surname', 'dateFrom', 'description'];
  trainerInterviewDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private trainerViewService: TrainerViewService) {
  }

  ngOnInit() {
    this.getTrainerView();
  }

  applyFilter(filterValue: string) {
    this.trainerInterviewDataSource.filter = filterValue.trim().toLowerCase();
  }

  private getTrainerView() {
    this.trainerViewService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => {
          c['position'] = counter++;
        });
        this.trainerInterviewDataSource = new MatTableDataSource(data);
        this.trainerInterviewDataSource.sortingDataAccessor = (item: any, property) => {
          switch (property) {
            case 'worker':
              return item.worker.surname;
            case 'ticket':
              return item.ticket.client.surname;
            default:
              return item[property];
          }
        };
        this.trainerInterviewDataSource.sort = this.sort;
      })
  }
}
