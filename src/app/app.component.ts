import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello World from inline template!</h1>', //Example of an inline html template
  //Example of multiline html template bellow
  // template: `<h1>Hello World from multiline template!</h1>
  //   <p>Angular is Awesome</p> `,
  styleUrls: ['./app.component.scss'],
  //Example of inline styling bellow
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = 'Admin';
}
