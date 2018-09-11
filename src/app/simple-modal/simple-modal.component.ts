import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  template: `
    <div *ngIf="isTrapModal" [cdkTrapFocus] class="wrapper" role="dialog">
      <div class="cancel-dialog">
        <h2>Confirmation</h2>
        <p>Do you accept?</p>
        <button class="cancel-btn" (click)="close.emit()">Accept</button>
        <button class="cancel-btn" (click)="close.emit()">Close</button>
      </div>
    </div>
    <div *ngIf="isTrapFocusModal" [cdkTrapFocus] [cdkTrapFocusAutoCapture]="true" class="wrapper" role="dialog">
      <div class="cancel-dialog">
        <h2>Confirmation</h2>
        <p>Do you accept?</p>
        <button class="cancel-btn" (click)="close.emit()">Accept</button>
        <button class="cancel-btn" cdkFocusInitial (click)="close.emit()">Close</button>
        <ng-container *ngIf="isTrapModal">
          <button class="cancel-btn"  (click)="close.emit()">I'm not human</button>
          <button class="cancel-btn" (click)="close.emit()">IDK!</button>
        </ng-container>
      </div>
    </div>
    <div *ngIf="isBadModal" class="wrapper" role="dialog">
      <div class="cancel-dialog">
        <h2>Confirmation</h2>
        <p>Do you accept?</p>
        <button class="cancel-btn" (click)="close.emit()">Accept</button>
        <button class="cancel-btn" (click)="close.emit()">Close</button>
      </div>
    </div>
  `,
  styleUrls: [`./simple-modal.component.scss`]
})
export class SimpleModalComponent implements OnInit, OnDestroy {
  overflow;
  @Input() isTrapModal = false;
  @Input() isBadModal = false;
  @Input() isTrapFocusModal = false;
  @Output() close: EventEmitter<null> = new EventEmitter<null>();

  ngOnInit() {
    this.overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = this.overflow;
  }
}
