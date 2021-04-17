import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
})
export class FieldsetComponent implements OnInit {
  @Input() legend = '';
  @Input() isOpen = true;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
