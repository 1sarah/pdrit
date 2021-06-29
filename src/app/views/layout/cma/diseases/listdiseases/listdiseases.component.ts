import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listdiseases',
  templateUrl: './listdiseases.component.html',
  styleUrls: ['./listdiseases.component.scss']
})
export class ListdiseasesComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'api/v1/pests-and-diseases/pests-and-diseases';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/user-management/diseases/{0}/view-disease';
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
    this.cols.push({
      title: 'Id',
      data: 'userId'
    });
    this.cols.push({
      title: 'FirstName',
      data: 'firstname'
    });
    this.cols.push({
      title: 'LastName',
      data: 'lastName'
    });
    this.cols.push({
      title: 'Location',
      data: 'location',
    });


  }

}
