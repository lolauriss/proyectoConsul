import React,{Component} from 'react'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


export default class EventCalendar extends Component {

render() {
	return (
	<Fullcalendar
	defaultView="dayGridMonth" plugins= {[dayGridPlugin]}
	/>
	)
       }
}