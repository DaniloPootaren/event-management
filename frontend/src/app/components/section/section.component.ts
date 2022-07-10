import { Component, Input, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Section } from 'src/app/types/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section | null = null;
  icon = faCalendar;
  constructor() {}

  ngOnInit(): void {}
}
