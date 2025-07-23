import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listner-example',
  imports: [],
  templateUrl: './host-listner-example.html',
  styleUrl: './host-listner-example.css'
})
export class HostListnerExample {
bgColor: string = 'black';
@HostListener('mouseenter') onMouseEnter() {
  this.bgColor = 'lightblue';
}
@HostListener('mouseleave') onMouseLeave() {
  this.bgColor = 'orange';
}
@HostListener('click') onClick() {
  this.bgColor = 'yellow';
}
}
