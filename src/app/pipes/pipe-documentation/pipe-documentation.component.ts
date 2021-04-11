import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent implements OnInit {
  flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  constructor() {}

  ngOnInit(): void {}

  modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
