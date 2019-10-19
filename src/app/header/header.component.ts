import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  collapsed = true;

  constructor() {}

  ngOnInit() {
    const animatedIcon = document.querySelector('.animated-icon');
    animatedIcon.addEventListener('click', event => {
      animatedIcon.classList.toggle('open');
    });
  }

  onChange(event: Element) {
    const section = event.innerHTML;
    this.changed.emit(section);
  }
}
