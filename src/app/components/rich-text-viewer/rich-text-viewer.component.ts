import { Component, Input, OnInit } from '@angular/core';

import { htmlRegex } from './html-regex.data';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss'],
})
export class RichTextViewerComponent implements OnInit {
  validHtml = '';

  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);

    this.validHtml = isValidHtml ? html : '';
  }

  constructor() {}

  ngOnInit(): void {}

  private parseNonEmptyHtml(html: string = ''): string {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
