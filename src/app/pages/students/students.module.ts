import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Http, HttpModule } from '@angular/http'

import { StudentsRoutingModule } from './students-routing.module';
import { ListsComponent } from './lists/lists.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { StudentsComponent } from './students.component';

import { SlideOutComponent } from './slide-out/slide-out.component';

import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './meetings/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './meetings/visitors-statistics/visitors-statistics.component';
import { AcademicsComponent } from './academics/academics.component';
import { StudentComponent } from './lists/student/student.component';




@NgModule({
  declarations: [
    ListsComponent, 
    MeetingsComponent, 
    StudentsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent,
    AcademicsComponent,
    StudentComponent
  ],
  imports: [
    ThemeModule,
    StudentsRoutingModule,
    Ng2SmartTableModule,
    HttpModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule
  ]
})
export class StudentsModule { }
