import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './mi-modal.component.html',
  styleUrls: ['./mi-modal.component.css']
})
export class MiModalComponent {
  @Output() purchaseConfirmed = new EventEmitter<boolean>();

  confirmPurchase(isConfirmed: boolean): void {
    this.purchaseConfirmed.emit(isConfirmed);
  }
}




