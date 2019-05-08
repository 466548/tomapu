import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app tomap';
  name = 'Angular';

  len = 3;

  membar = {
    name1: 'Angular',
    age:'30'
  };
}
 