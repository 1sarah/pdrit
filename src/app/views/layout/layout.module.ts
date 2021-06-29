import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from './layout-routing.module';
import {UtilModule} from './util/util.module';
import { MatNativeDateModule } from '@angular/material/core';
import { CmaModule } from './cma/cma.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UtilModule,
    MatNativeDateModule,
    CmaModule
  ]
})
export class LayoutModule {
}
