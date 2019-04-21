import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

	public doughnutChartOptions = {
		scaleShowVerticalLines: false,
		responsive: true,
		title: {
			display: true,
			text: 'Продажи за последний месяц',
			fontSize: 14
		}
	};
	public doughnutChartLabels = ['Телефоны', 'Планшеты', 'Телевизоры', 'Ноутбуки'];
	public doughnutChartData = [120, 150, 180, 90];
	public doughnutChartType = 'doughnut';

  constructor() { }

  public chartClicked(e:any):void {
  	console.log(e);
  }

  ngOnInit() {
  }

}
