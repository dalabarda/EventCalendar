import { Component, Input } from '@angular/core'

@Component({
	selector: 'collapsible-well',
	template: `
<div (click)="toggleContent()" class="well pointable">
	<h4> 
		<ng-content select="[well-title]"></ng-content> 
	</h4>
		<ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
`
})

export class CollapsibleWellComponent {

visible: boolean = true;
	
	toggleContent() {
		this.visible = !this.visible;
	}
}

/*
CONTENT PROJECTION
<ng-Content> this tag tells angular whatever content exists inside of my component, 
which we can see back here in our session-list.component.html, and put inside off here

*/