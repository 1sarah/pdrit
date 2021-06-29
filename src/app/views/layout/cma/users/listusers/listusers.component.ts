import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.scss']
})
export class ListusersComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'api/v1/users/all';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/user-management/users/{0}/view-user';
  users:any = [];
  constructor(
    private stewardService: StewardService<any, any>,
  ) {
    this.cols = [];
    this.params = new Map();

    this.params.set('sort', 'id,desc');
  }

  ngOnInit() {


    this.cols.push({
      isCheckBox: true,
      title: '',
      data: 'userId',
    });
    // this.cols.push({
    //   title: 'Id',
    //   data: 'userId'
    // });
    this.cols.push({
      title: 'FirstName',
      data: '.firstname'
    });
    this.cols.push({
      title: 'LastName',
      data: '.lastName'
    });
    this.cols.push({
      title: 'Location',
      data: '.location',
    });


  }

}
