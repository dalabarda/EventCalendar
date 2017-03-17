import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Directive({
  selector: '[modal-trigger]' // square brackets indicates this is an attribute, not an element
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;


  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({})
    })
  } 


  // private el: HTMLElement;
  // @Input('modal-trigger') modalId: string; 

  // constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
  //   this.el = ref.nativeElement;
  // }

  // ngOnInit() {
  //   this.el.addEventListener('click', e => {
  //     this.$(`#${this.modalId}`).modal({})
  //   })
  // } 

}