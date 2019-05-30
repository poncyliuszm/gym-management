import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {ReceptionistViewService} from "../services/receptionist-view.service";

@Component({
  selector: 'app-trainer-view',
  templateUrl: './receptionist-view.component.html',
  styleUrls: ['./receptionist-view.component.css']
})
export class ReceptionistViewComponent implements OnInit {

  displayedColumns: string[] =
    ['position', 'clientName', 'clientSurname', 'workerName', 'workerSurname', 'timeFrom'];
  receptionistViewDataSource = new MatTableDataSource();
  selection = new SelectionModel<any>(false, []);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private receptionistViewService: ReceptionistViewService) {
  }

  ngOnInit() {
    this.getReceptionistView();
  }

  applyFilter(filterValue: string) {
    this.receptionistViewDataSource.filter = filterValue.trim().toLowerCase();
  }

  private getReceptionistView() {
    this.receptionistViewService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => {
          c['position'] = counter++;
        });
        this.receptionistViewDataSource = new MatTableDataSource(data);
        this.receptionistViewDataSource.sortingDataAccessor = (item: any, property) => {
          return item[property];
        };
        this.receptionistViewDataSource.sort = this.sort;
      })
  }
}
