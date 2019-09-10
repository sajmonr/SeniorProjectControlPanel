import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input()label: string;
  @Input()imageSrc: string;
  @Input()active = false;
  @Input()switchable = false;

  constructor() { }

}
