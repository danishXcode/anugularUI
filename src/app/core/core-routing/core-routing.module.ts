import { GalleryComponent } from './../gallery/gallery.component';
import { CoreheadersComponent } from './../components/coreheaders/coreheaders.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



const routes: Routes = [ {
  path: 'core', children: [
    { path: 'gallery', component: GalleryComponent },
    { path: 'header', component: CoreheadersComponent }
  ]
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoreRoutingModule { }
