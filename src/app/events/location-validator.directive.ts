import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}] // we can register services with the dependency injector on a given component, and those services will be available to that component and its children.
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null; // returning null tells the validation system that this validator is passing. 
    } else {
      return {validateLocation: false} // this match with the type we difined at line 9.  [key: string]: any 
    }
  }
} 