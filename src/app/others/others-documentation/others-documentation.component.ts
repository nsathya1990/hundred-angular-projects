import { Component, OnInit } from '@angular/core';

import { fadeInOutAnimation } from '../animations/fade-in-out/fade-in-out.animation';

@Component({
  selector: 'app-others-documentation',
  templateUrl: './others-documentation.component.html',
  styleUrls: ['./others-documentation.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OthersDocumentationComponent implements OnInit {
  isInDOM = true;

  constructor() {}

  ngOnInit(): void {}
}
