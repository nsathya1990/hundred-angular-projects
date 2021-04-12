import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title = '';
  isHidden = true;

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.isHidden = true;
  }

  open(): void {
    this.isHidden = false;
  }
}
