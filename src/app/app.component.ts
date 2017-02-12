import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `
  <button #btn md-raised-button color="accent">Click me!</button>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
  `
})
export class AppComponent implements OnInit {
    @ViewChild('btn') btn;
    message: string;

    ngOnInit() {
        Observable.fromEvent(this.getNativeElement(this.btn), 'click').subscribe(event => {
            this.btn.clientX = 0;
            console.log(event)
        });
    }

    getNativeElement(element) {
        return element._elementRef.nativeElement;
    }
}
