import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {DataTablesModule} from 'angular-datatables';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {UtilModule} from '../util/util.module';
import {CdkTableModule} from '@angular/cdk/table';
import {DeleteDialogComponent} from '../util/functionality-buttons/delete-dialog/delete-dialog.component';
import {DeclineDialogComponent} from '../util/functionality-buttons/decline-dialog/decline-dialog.component';
import {ApproveDialogComponent} from '../util/functionality-buttons/approve-dialog/approve-dialog.component';
import {FormWizardModule} from 'angular2-wizard/dist';
import {ExpandMode, NgxTreeSelectModule} from 'ngx-tree-select';
import {PageHeaderModule} from '../../../shared/modules/page-header/page-header.module';
import {UfsExportService} from '../util/ufs-export.service';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CreateplantsComponent } from './plants/createplants/createplants.component';
import { CreateusersComponent } from './users/createusers/createusers.component';
import { ListplantsComponent } from './plants/listplants/listplants.component';
import { ListusersComponent } from './users/listusers/listusers.component';
import { ListpestsComponent } from './pests/listpests/listpests.component';
import { ListdiseasesComponent } from './diseases/listdiseases/listdiseases.component';
import { ViewplantsComponent } from './plants/view-plants/view-plants.component';
import { ViewusersComponent } from './users/view-users/view-users.component';
import { ViewpestsComponent } from './pests/view-pests/view-pests.component';
import { ViewdiseasesComponent } from './diseases/view-diseases/view-diseases.component';
import { CmaRoutingModule } from './cma-routing.module';
import { CreatepestsComponent } from './pests/createpests/createpests.component';
import { CreatediseasesComponent } from './diseases/creatediseases/creatediseases.component';


@NgModule({
  declarations: [
    ViewplantsComponent,
    ViewusersComponent,
    ViewdiseasesComponent,
    ViewpestsComponent,
    ListpestsComponent,
    ListplantsComponent,
    ListdiseasesComponent,
    ListusersComponent,
    CreateplantsComponent,
    CreatepestsComponent,
    CreatediseasesComponent,
    CreateusersComponent,
   



  ],
  imports: [
    RxReactiveFormsModule,
    CommonModule,
    CmaRoutingModule,
    DataTablesModule,
    UtilModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTabsModule,
    FormsModule,
    FormWizardModule,
    NgxTreeSelectModule.forRoot({
      allowFilter: true,
      filterPlaceholder: 'Type your filter here...',
      maxVisibleItemCount: 10,
      idField: 'unitItemId',
      textField: 'name',
      childrenField: 'children',
      allowParentSelection: true,
      expandMode: ExpandMode.Selection
    }),
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule,
    PageHeaderModule
  ],

  entryComponents: [
    DeleteDialogComponent,
    ApproveDialogComponent,
    DeclineDialogComponent
  ],
  providers: [UfsExportService]
})
export class CmaModule {
}
