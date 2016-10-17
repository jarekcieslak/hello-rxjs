import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <button #btn md-raised-button color="accent">Click me!</button>  
  <div>
    <h2>Beast Mode Activated</h2>
    <strong>{{count}} times!</strong>
  </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('btn') btn;

  constructor() {}

  ngOnInit() {
    Observable.fromEvent(this.getNativeElement(this.btn), 'click')
      .startWith({ticker: 0})
      .scan((acc, curr) => { return { ticker: acc.ticker + 1 }; })
      .subscribe(result => this.count = result.ticker);
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}