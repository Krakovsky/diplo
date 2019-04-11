import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TasksboardComponent } from './tasksboard/tasksboard.component';
import { CalendarEventsComponent } from './calendar-events/calendar-events.component';

const routes: Routes = [
	{
		path: 'doughnut-chart',
		component: DoughnutChartComponent,
	},
	{
		path: 'bar-chart',
		component: BarChartComponent,
	},
	{
		path: 'timeline',
		component: TimelineComponent,
	},
	{
		path: 'tasksboard',
		component: TasksboardComponent,
	},
	{
		path: 'calendar-event',
		component: CalendarEventsComponent,
	},
	{
		path: '**',
		component: BarChartComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
