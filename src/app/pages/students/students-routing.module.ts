import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StudentsComponent} from './students.component';
import {ListsComponent} from './lists/lists.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { AcademicsComponent } from './academics/academics.component';


const routes: Routes = [{
  path: '',
  component: StudentsComponent,
  children: [{
    path: 'lists',
    component: ListsComponent
  }, {
    path: 'meetings',
    component: MeetingsComponent
  }, {
    path: 'academics',
    component: AcademicsComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
export const routedComponents = [
  StudentsComponent,
  ListsComponent,
];