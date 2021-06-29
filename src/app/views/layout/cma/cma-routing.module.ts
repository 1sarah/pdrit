import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../../../shared/guard';
import { CreateplantsComponent } from './plants/createplants/createplants.component';
import { CreateusersComponent } from './users/createusers/createusers.component';
import { CreatediseasesComponent } from './diseases/creatediseases/creatediseases.component';
import { CreatepestsComponent } from './pests/createpests/createpests.component';
import { ListplantsComponent } from './plants/listplants/listplants.component';
import { ListdiseasesComponent } from './diseases/listdiseases/listdiseases.component';
import { ListpestsComponent } from './pests/listpests/listpests.component';
import { ListusersComponent } from './users/listusers/listusers.component';
import { ViewplantsComponent } from './plants/view-plants/view-plants.component';
import { ViewpestsComponent } from './pests/view-pests/view-pests.component';
import { ViewdiseasesComponent } from './diseases/view-diseases/view-diseases.component';
import { ViewusersComponent } from './users/view-users/view-users.component';




const routes: Routes = [
  {
    path: '', data: {title: 'cma-management'}, children: [
      {path: 'plants', component: ListplantsComponent, canActivate: [AuthGuard]},
      {path: 'users', component: ListusersComponent, canActivate: [AuthGuard]},
      {path: 'diseases', component: ListdiseasesComponent, canActivate: [AuthGuard]},
      {path: 'pests', component: ListpestsComponent, canActivate: [AuthGuard]},
      {path: 'plants/create-plants', component: CreateplantsComponent, canActivate: [AuthGuard]},
      {path: 'pests/create-pests', component: CreatepestsComponent, canActivate: [AuthGuard]},
      {path: 'diseases/create-diseases', component: CreatediseasesComponent, canActivate: [AuthGuard]},
      {path: 'users/create-users', component: CreateusersComponent, canActivate: [AuthGuard]},
      {path: 'plants/:id/view-plants', component: ViewplantsComponent, canActivate: [AuthGuard]},  
      {path: 'diseases/:id/view-diseases', component: ViewdiseasesComponent, canActivate: [AuthGuard]}, 
      {path: 'pests/:id/view-pests', component: ViewpestsComponent, canActivate: [AuthGuard]},    
      {path: 'users/:id/view-users', component: ViewusersComponent, canActivate: [AuthGuard]},
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmaRoutingModule { }
