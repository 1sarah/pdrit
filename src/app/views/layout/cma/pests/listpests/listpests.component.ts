import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listpests',
  templateUrl: './listpests.component.html',
  styleUrls: ['./listpests.component.scss']
})
export class ListpestsComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'api/v1/pests-and-diseases/pests-and-diseases';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/user-management/pests/{0}/view-pest';
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
      data: 'pestId',
    });
    // this.cols.push({
    //   title: 'Id',
    //   data: 'userId'
    // });
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
