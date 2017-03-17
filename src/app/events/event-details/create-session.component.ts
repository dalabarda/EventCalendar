import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { ISession, restrictedWords3 } from '../shared/index'

@Component({
	selector: 'create-session',
	templateUrl: 'app/events/event-details/create-session.component.html',
	styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateSessionComponent implements OnInit {
	//we just need to create an output parameter for our parent component to bind to.
	// Output property. 

	// emit a message back to our parent component when the user clicks save.
	@Output() saveNewSession = new EventEmitter() // 'saveNewSession' is going to be an EventEmitter, and we'll have to import that too.
	@Output() cancelAddSession = new EventEmitter() 
												// 	we need to wire up the cancel button click on this component to emit that event.  
												// (click)="cancel()" in the HTML button
	// we have to declare a form group here
	newSessionForm: FormGroup
	name: FormControl
	presenter: FormControl
	duration: FormControl
	level: FormControl
	abstract: FormControl

	ngOnInit() {
		// setting up each of our FormControls for each of our fields in here.
		this.name = new FormControl('', Validators.required)
		this.presenter = new FormControl('', Validators.required)
		this.duration = new FormControl('', Validators.required)
		this.level = new FormControl('', Validators.required)
		this.abstract = new FormControl('', [Validators.required, 
											Validators.maxLength(400),
											this.restrictedWords, // custom validator applyed to the abstract field
											this.restrictedWords2(['foo', 'bar']), // more complex functionning custom validators. 
											restrictedWords3(['aeee', 'asdsa']) // this is imported from another file in shared folder, therefore it doesn't need the 'this' keyword
											])
		
		// now we have to build a form out of these fields...
		this.newSessionForm = new FormGroup({
			name: this.name,
			presenter: this.presenter,
			duration: this.duration,
			level: this.level,
			abstract: this.abstract
		})
	}

	// creating CUSTOM VALIDATORS: prevent certain words from being used in a field and then we'll 
	// apply that validator to this abstract field. Validators are functions that returns null if the controll
	// is valid or an error object if it's invalid. 
	private restrictedWords(control: FormControl): {[key: string]: any} // this function returns an object. no matter what kind.
		
		{
			return control.value.includes('foo')
			? {'restrictedWords': 'foo'} // if it is invalid: return this
			: null // if it is VALID: return null
		}

	// now another example but more complex of custom validator as a function:

	private restrictedWords2(words: any){
		return (control: FormControl): {[key: string]: any} => { // this is a fat error function from ES6 with some TS typing info.
			if (!words) return null 

			// finding any restrictedWords2 that exist in our control value.
			var invalidWords = words
				.map((w: any) => control.value.includes(w) ? w : null)
				.filter((w:any) => w != null)

			return invalidWords && invalidWords.length > 0
				? {'restrictedWords': invalidWords.join(', ')}
				: null
			}
		}


	saveSession(formValues: any) {
		// console.log(formValues)
		let session:ISession = {
			id: undefined,
			name: formValues.name,
			duration: +formValues.duration, // casting into a number
			level: formValues.level,
			presenter: formValues.presenter,
			abstract: formValues.abstract,
			voters: []
		}
		// console.log(session)
		this.saveNewSession.emit(session) // now we have and output parameter to bind to, now we just have to bind it to our event details page.
	}

	cancel() {
		this.cancelAddSession.emit() // 
	}

}