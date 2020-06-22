import { GalleryComponent } from './gallery/gallery.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';

import { CoreRoutingModule } from './core-routing/core-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreheadersComponent } from './components/coreheaders/coreheaders.component';
import { MyhomeComponent } from './myhome/myhome.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [NavbarComponent, GalleryComponent, CoreheadersComponent,CoreFooterComponent, MyhomeComponent ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
    FormsModule

  ],
  exports:
    [
      NavbarComponent,
      CoreFooterComponent,
      MyhomeComponent,
      GalleryComponent
    ],
})
export class CoreModule { }
