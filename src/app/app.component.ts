import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';

  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }
}
