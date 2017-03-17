import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name | uppercase }}</h2>
      <div>Date: {{ event?.date | date }}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{event?.price | currency:'USD':true}}</div>
      <div>Group: {{event?.group}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
       </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 230px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb;}
  `] // '!important' otherwise, this style will get overridden by another one.
})
export class EventThumbnailComponent {
  @Input() event : IEvent // this is just creating a property called event and telling TypeScript that it is of type any.
                     // we don't care for now, what data type is. 

            // the Imput() decorator tells Angular that this event will be passed in from another component

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}