import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from "../shared/event.service"

@Injectable()
export class EventRouteActivator implements CanActivate {
	constructor(private eventService:EventService, private router:Router) { // injecting the event service
					
	}

	canActivate(route:ActivatedRouteSnapshot) {
		const eventExists = !!this.eventService.getEvent(+route.params['id']) // I don't understand why we have to cast the event id to a number here. read more about that!

		if (!eventExists)
			this.router.navigate(['/404'])
		return eventExists
	}
}