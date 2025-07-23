import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter';
import { HostListnerExample } from './host-listner-example/host-listner-example';

import { PreserveWhitespaceExample } from "./preserve-whitespace-example/preserve-whitespace-example";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, HostListnerExample, PreserveWhitespaceExample],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'SecondProject';
}
