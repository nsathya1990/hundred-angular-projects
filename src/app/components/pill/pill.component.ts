import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() isActive = false;
  @Input() canBeSelected = false;

  @Output() selected = new EventEmitter<{
    hasBeenSelected: boolean;
    label: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isActive = !this.isActive;
    this.selected.emit({ hasBeenSelected: this.isActive, label: this.label });
  }
}
