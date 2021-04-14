import { Component, Input, OnInit } from '@angular/core';

import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon-type.enum';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
})
export class RibbonComponent implements OnInit {
  @Input() content = '';
  @Input() location: RibbonLocation = RibbonLocation.BottomLeft;
  @Input() type: RibbonType = RibbonType.Success;

  constructor() {}

  ngOnInit(): void {}
}
