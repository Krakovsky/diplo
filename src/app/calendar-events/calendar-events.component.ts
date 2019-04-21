import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.scss']
})

export class CalendarEventsComponent implements OnInit {

	constructor(){}

	@ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

	calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
	calendarWeekends = true;
	calendarEvents: EventInput[] = [];

	handleDateClick(arg) {
		var valueEvent = prompt("Добавить событие:", '');
		if (valueEvent) {
			this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
				title: valueEvent,
				start: arg.date,
				allDay: arg.allDay,
			})
		} else if (valueEvent === null) {
			alert("Вы отменили ввод");
		} else {
			alert("Введите событие");
		}
		console.log(this.calendarEvents);
	}

	updateEvent(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
			}
		}
		console.log(this.calendarEvents)
	}

	ngOnInit(){
	}

}
