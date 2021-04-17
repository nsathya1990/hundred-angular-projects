import { Component, OnInit, ViewChild } from '@angular/core';

import { AccordionItem } from '../accordion/accordion-item.interface';
import { SocialMediaIcon } from '../social-media-bar/social-media-icon.interface';

import { LoaderType } from '../loader/models/loader-type.enum';
import { PillType } from '../pill/pill-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon-type.enum';
import { SocialMedia } from '../social-media-bar/social-media.enum';

import { ButtonMeta } from '../button-toggle/button-meta.model';

import { SnackbarComponent } from '../snackbar/snackbar.component';

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

  searchListItems = [
    'United States',
    'Mexico',
    'United Kingdom',
    'United Arab Emirates',
    'India',
    'Madagascar',
  ];

  selectedTab = 0;
  tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  RibbonLocation = RibbonLocation;
  RibbonType = RibbonType;
  ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.TopRight };

  buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  /** Another way of making it work
   * @ViewChild('snackbar') snackbar: SnackbarComponent;
   */
  @ViewChild(SnackbarComponent) snackbar: SnackbarComponent;

  loaded = false;

  socialMedia: SocialMediaIcon[] = [
    {
      href: 'https://www.facebook.com/scjmuthu/',
      type: SocialMedia.Facebook,
    },
    {
      href: 'https://github.com/nsathya1990/',
      type: SocialMedia.GitHub,
    },
    {
      href: 'https://www.instagram.com/sathyapriyan_c/',
      type: SocialMedia.Instagram,
    },
    {
      href: 'https://www.linkedin.com/in/nsathya1990/',
      type: SocialMedia.LinkedIn,
    },
    {
      href: 'https://twitter.com/sathyapriyan_c',
      type: SocialMedia.Twitter,
    },
  ];

  PillType = PillType;

  constructor() {}

  ngOnInit(): void {}

  debounceExampleMethod(value: string): void {
    console.log(`Component Documentation: ${value}`);
  }

  snackbarShow(): void {
    this.snackbar.showMessage('Snackbar Example');
  }
}
