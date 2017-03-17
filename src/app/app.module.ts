import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index'

import { JQ_TOKEN, 
    TOASTR_TOKEN, 
    Toastr, 
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective 
} from './common/index'

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav/navbar.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

declare let toastr : Toastr
declare let JQuery : Object // used to display the search result on the screen

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,        // template-based forms (diving deeper)
      ReactiveFormsModule, // template-based forms (diving deeper)
      RouterModule.forRoot(appRoutes) 
    ],
  declarations: [ 
  		AppComponent, 
  		EventsListComponent,
  		EventThumbnailComponent,
      EventDetailsComponent,
      NavBarComponent,
      CreateEventComponent, 
      Error404Component,
      CreateSessionComponent,
      SessionListComponent,
      DurationPipe,
      CollapsibleWellComponent,
      ModalTriggerDirective,
      SimpleModalComponent
  	],
  providers: [
      EventService, 
      {        
        provide: TOASTR_TOKEN, // use the token we created   -> now, whenever somebody tries to get an item using this token...
        useValue: toastr // toastr global object               ... the dependency injector will give them the toastr object.
      },
      
                              // { provide: EventRouteActivator, useClass: EventRouteActivator }
                              // { provide: TOASTR_TOKEN, useExisting: toastr } 'useExisting' is known as allias provider. and there is a fairly limited set of scenarios 
                              //    where you'd want to use these, one that comes from the docs is to minimize an API. 
                              // for instance, if we have a Logger service, and that Logger service:
                              //      { provide: MinimalLogger, useExisting: Logger },
                              // it is a big service that had a very large API, maybe it had 20 or 30 different methods in it but in your application you are using the most common five.
                              // So, you create a MinimalLogger service, and what that does is now it gets the API for the MinimalLogger, nad 
                              // there is the 'useFactory' and that is damm complicated...

      {
        provide: JQ_TOKEN,
        useValue: JQuery
      },
      EventRouteActivator,
      EventListResolver,
      AuthService ,
      {     // the mechanism to ask before an important action on the website.
        provide: 'canDeactivateCreateEvent', // this is requested...       -> this provider is just a string. if somebody else register a service using that same string, they would conflict with each other. 
        useValue: checkDirtyState // ... when this is fulfiled useValue is a function bellow
      }
    ],
  bootstrap:[ 
  		AppComponent
  	]
})

export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
      return window.confirm('You have not saved this file, do you really want to cancel?')
  return true
}