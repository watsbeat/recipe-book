import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() selectedSection = new EventEmitter<string>();
  collapsed = true;

  constructor() {}

  ngOnInit() {
    const animatedIcon = document.querySelector('.animated-icon');
    animatedIcon.addEventListener('click', (event: MouseEvent) => {
      animatedIcon.classList.toggle('open');
    });
  }

  onSelect(section: string) {
    this.selectedSection.emit(section);
  }
}
