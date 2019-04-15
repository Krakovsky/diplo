import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	constructor() { }

	public barChartOptions = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
	public barChartType = 'bar';
	public barChartLegend = true;
	public barChartData = [
		{data: [7.93, 11.88, 21.85, 25.55, 26.61, 27.20, 27.23], label: 'Курс доллара'},
		{data: [10.61, 15.61, 24.22, 28.27, 30.00, 32.12, 30.90], label: 'Курс евро'},
		{data: [2.52, 3.72, 5.79, 6.48, 7.05, 7.54, 7.18], label: 'Курс злотых'},
	];

	public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event);
  }

	ngOnInit() {
	}

}
