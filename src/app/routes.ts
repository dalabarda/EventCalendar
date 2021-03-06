import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'

import {
	EventsListComponent,
	EventDetailsComponent,
	CreateEventComponent,
	EventRouteActivator,
	EventListResolver,
	CreateSessionComponent
} from './events/index'

export const appRoutes:Routes = [
	{path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, // in this example I used a function
	{path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
	{path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] }, // in this example I used a service
	{path: 'events/session/new', component: CreateSessionComponent},
	{path: '404', component: Error404Component },
	{path: '', redirectTo: '/events', pathMatch: 'full' }, // defining a default route
	{path: 'user', loadChildren: 'app/user/user.module#UserModule'} // this is saying when a route starts with /user, load the UserModule from this path
]

// read more about parameter placeholders



// 'redirectTo' needs the 'pathMatch' property and there are two options for that: prefix or full 
	// prefix will redirect if the URL starts with the specified path string.
	// full means redirect if it fully matches the specified path string.




/* 
in a nutshell what routes do:
	1)  add the <router-outlet> component to our app.component
	2)  we define our routes for our pages (including the default route) into routes.ts placed din the root of the app
	3)  we load our routes into our events module using the router module
	4)  add the <base href="/"> into our HTML page


*/
