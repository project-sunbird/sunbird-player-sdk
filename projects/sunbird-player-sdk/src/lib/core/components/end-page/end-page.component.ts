import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { NextContent } from '../../../../sunbird-player-sdk.interface';

@Component({
  selector: 'sb-player-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit, OnDestroy {
  @Input() resourceService: any;
  isRTL: boolean = false;
  @Input() showExit: boolean;
  @Input() showReplay = true;
  @Input() contentName: string;
  @Input() outcome: any;
  @Input() outcomeLabel: string;
  @Input() userName: string;
  @Input() timeSpentLabel: string;
  @Input() nextContent: NextContent;
  @Output() replayContent = new EventEmitter<any>();
  @Output() exitContent = new EventEmitter<any>();
  @Output() playNextContent = new EventEmitter<any>();

  subscription: Subscription;
  observer: MutationObserver;

  ngOnInit() {
    console.log("this from video player",globalThis);
    // Initial check for RTL
    this.isRTL = document.dir === 'rtl';

    this.subscription = fromEvent(document, 'keydown').subscribe((e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        (document.activeElement  as HTMLElement).click();
      }
    });

    // Setup MutationObserver to monitor changes to the `dir` attribute
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'dir') {
          this.isRTL = document.dir === 'rtl';
        }
      });
    });

    // Start observing the document's root element (html tag)
    this.observer.observe(document.documentElement, { attributes: true });
  }

  playNext() {
    this.playNextContent.emit({
      name: this.nextContent.name,
      // tslint:disable-next-line:no-string-literal
      identifier: this.nextContent['identifier'],
      type: 'NEXT_CONTENT_PLAY'
    });
  }

  replay() {
    if (this.showReplay) {
      this.replayContent.emit({ type: 'REPLAY' });
    }
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.subscription && this.subscription.unsubscribe();

    // Disconnect the MutationObserver to avoid memory leaks
    if (this?.observer) {
      this?.observer?.disconnect();
    }
  }
}
