import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  isShown = false;

  constructor() {}

  ngOnInit(): void {}

  show(): void {
    this.isShown = true;
  }

  hide(): void {
    this.isShown = false;
  }
}
