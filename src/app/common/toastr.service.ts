import { OpaqueToken } from '@angular/core'
// the Opaque Token creates a token used for the DI registry in order to find the instance of the object we want.




export let TOASTR_TOKEN = new OpaqueToken('toastr');
// TOASTR_TOKEN can thenbe used to lookup the toastr object inside of the dependency injection registry.
// we register it over in the app module
// although i passed a string, TOASTR_TOKEN is an actual JavaScript object


export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}