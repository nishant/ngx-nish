import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-nish-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  readonly UNSUPPORTED_ERROR_TEXT = 'Your browser does not support embedded videos.';
  readonly SOURCE_UNDEFINED_ERROR_TEXT = 'No video source provided.';

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() source: string | undefined;
  @Input() thumbnail: string | undefined;
}
