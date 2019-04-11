import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  constructor() { }

  public dataTimeline = [
  	// {
  	// 	title: "Заголовок",
  	// 	contentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi minima nobis velit eum molestias autem aspernatur distinctio perspiciatis hic. Repellendus voluptate facere tempore cumque libero beatae reiciendis nesciunt eos?",
  	// 	bgColorIcon: "light-green",
  	// 	classIcon: "fa-home",
  	// 	date: "9:00 a.m."
  	// }
  ];

  listColorButtons = [
    {
      color:"red"
    },
    {
      color:"light-green"
    },
    {
      color:"blue"
    },
    {
      color:"orange"
    },
    {
      color:"cyan"
    },
  ];

  addItem(textareaTitle: string, textareaDesc: string, bgColorIcon: string, timelineDate: string, timelineIconClass: string){
    if (textareaTitle.length === 0 || textareaDesc.length === 0 || timelineDate.length === 0) {
      alert("Заполните все поля со звездочкой");
    } else {
      this.dataTimeline.push({
        "title": textareaTitle,
        "contentText": textareaDesc,
        "bgColorIcon": bgColorIcon,
        "date": timelineDate,
        "classIcon": timelineIconClass
      })
      console.log(this.dataTimeline)
    }
  }

  deleteTask(index) {
    this.dataTimeline.splice(index,1);
    console.log(this.dataTimeline);
  }

  ngOnInit() {

  }

}
