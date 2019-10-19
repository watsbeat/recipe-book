import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedSection: string;

  constructor() {}

  onNavigate(event: string) {
    this.loadedSection = event;
  }
}
