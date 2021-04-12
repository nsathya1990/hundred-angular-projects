import { Component, OnInit } from '@angular/core';

import { AccordionItem } from '../accordion/accordion-item.interface';

import { LoaderType } from '../loader/models/loader-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'],
})
export class ComponentDocumentationComponent implements OnInit {
  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];
  progressValue = 25;
  loaderType = LoaderType.Loading;

  toggleValue = false;

  constructor() {}

  ngOnInit(): void {}
}
