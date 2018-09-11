import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-focus-demo',
  templateUrl: './focus-demo.component.html',
  styles: []
})
export class FocusDemoComponent implements OnInit {
  modalOpen = false;
  trapModalOpen = false;
  focusedModalOpen = false;
  announcerModalOpen = false;

  constructor(private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit() {
  }

  longRequest() {
    setTimeout(() => {
      this.liveAnnouncer.announce('Acceptance was successful', 'assertive')
        .then(() => {
          this.announcerModalOpen = false;
          setTimeout(
            () => this.liveAnnouncer.announce(''),
            5000);
        });
    }, 3000);
  }

}
