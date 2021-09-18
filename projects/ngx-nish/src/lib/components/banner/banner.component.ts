import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-nish-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent  {
  @Input() text: string | string[] | undefined;
  @Input() theme: 'light' | 'dark' = 'dark'; /* TODO: add theme support */

  isTextArray(): boolean { return typeof this.text === 'object'; }
}
