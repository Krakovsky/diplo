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
	calendarEvents: EventInput[] = [
		{ title: 'Event Now', start: new Date() }
	];

	handleDateClick(arg) {
		if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
			this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
				title: 'New Event',
				start: arg.date,
				allDay: arg.allDay
			})
		}
		console.log(this.calendarEvents)
	}

	ngOnInit(){
	}

}
