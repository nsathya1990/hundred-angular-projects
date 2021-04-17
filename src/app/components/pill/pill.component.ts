import { Component, Input, OnInit } from '@angular/core';

import { PillType } from './pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent implements OnInit {
  @Input() type: PillType = PillType.Info;
  @Input() label = '';
  @Input() iconClasses = '';

  constructor() {}

  ngOnInit(): void {}
}
