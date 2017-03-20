import { Component, OnInit} from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { Router } from '@angular/router'

import { IEvent, ISession } from '../shared/index'

@Component({
	templateUrl: '/app/events/event-details/event-details.component.html',
	styles: [`
		.container { padding-left:20px; padding-right:20px; }
		.event-image { height: 100px; }
		a {cursor:pointer}
	`]

 })

export class EventDetailsComponent implements OnInit{

	// we have to declare a form group here
	eventForm: FormGroup
	group: FormControl
	addMode:boolean // important to pass data from a child to parent component.
	event:IEvent
	filterBy: string = 'all'
	sortBy: string = 'votes'

	constructor(private eventService:EventService, private route:ActivatedRoute, private router:Router) {
		
	}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {this.event = this.eventService.getEvent(+params['id']);  // this new code resets the event property.
		this.addMode = false;
		})
		// this.event = this.eventService.getEvent(+this.route.snapshot.params['id']) // pulling parameters off of the URL using the activated route service.
		

		// setting up each of our FormControls for each of our fields in here.
		this.group = new FormControl('', Validators.required)

		// now we have to build a form out of these fields...
		this.eventForm = new FormGroup({
			group: this.group,
		})
	}
	
	// put us into an Add Mode
	addSession() {
		this.addMode = true // just going to toggle a flag on our component
	}


	saveNewSession(session:ISession) {
		const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)); // so that should return us the maximum session ID, and then we will just set the ID on our new session
		session.id = nextId + 1 // set the ID on our new session 
		this.event.sessions.push(session) 			// adding the session to the event.
		this.eventService.updateEvent(this.event)   // calling updateEvent on our eventService to save this event.
		this.addMode = false 	// toggling back to false since we are done adding.
								// from here we need to go to add that updateEvent method on our event SERVICE.
	}

	// we are going to be passing the id of the asset in on the URL and we're going to want to pass that id in here.

	cancelAddSession() {
		this.addMode = false
	}

	// Javi's experiment
	 onSave(formValues: any) {
 		console.log(formValues)
	 }

	 // Javi's experiment
	 cancel() {
      this.router.navigate(['events'])
  	}
}

/*
on our createSessionForm, the session ID on this is going to be undefined, 
so we need to assign a new session ID to this session when it comes in.
So we will get the max session ID off of the sessions on the event, and 
then increment it and assign that to our session ID.



*/