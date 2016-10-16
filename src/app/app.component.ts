import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
    <div #ball class="ball"
      [style.left]="position.x + 'px'"
      [style.top]="position.y + 'px'">
    </div>
  </div>
  `
})
export class AppComponent implements OnInit {
  position: any;

  ngOnInit() {
    Observable.merge()
      .startWith({x: 200, y: 200})
      .subscribe(position => this.position = position)
  }

  increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value})
  }

  decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value})
  }
}