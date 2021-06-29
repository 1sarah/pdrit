import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listplants',
  templateUrl: './listplants.component.html',
  styleUrls: ['./listplants.component.scss']
})
export class ListplantsComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'api/v1/plant/fetchall';
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
      data: 'plantId',
    });
    this.cols.push({
      title: 'Name',
      data: 'name'
    });
    this.cols.push({
      title: 'Description',
      data: 'description'
    });
    this.cols.push({
      title: 'Image',
      data: 'image',
    });


  }

}
