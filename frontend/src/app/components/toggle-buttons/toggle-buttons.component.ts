import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent implements OnInit {

  @Input() alternative: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
