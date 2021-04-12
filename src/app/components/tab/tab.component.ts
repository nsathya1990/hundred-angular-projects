import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() tabs: { title: string; active: boolean }[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  selectTab(selected: { title: string; active: boolean }, index: number): void {
    this.tabs.forEach((tab) => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
