import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({

  template: `

<div>
    <div class="row">
        <div *ngFor="let event of events">
            <event-thumbnail class="col-md-6"  [event]="event"></event-thumbnail>
        </div>
    </div>
</div>


  `
 }) // 

export class EventsListComponent implements OnInit {
events:IEvent[]

  constructor(private eventService: EventService, private route:ActivatedRoute) {


      // it is not a good idea to put 'this' and other things into the constructor that are
      // potentially long-running and eventually this will be an AJAX call, and so this will
      // take a little while to fetch those events. 

      // the best thing to do is hooking into a lifecycle hook and one of those is the ngOnInit method,
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }


}