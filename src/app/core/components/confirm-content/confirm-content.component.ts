import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-content',
  template: `
    <div class="confirm-text-container">
      ท่านต้องการยืนยันการลงทะเบียน “{{ eventName || '' }}” หรือไม่
    </div>
  `,
  styleUrls: ['./confirm-content.component.scss'],
})
export class ConfirmContentComponent implements OnInit {
  @Input() eventName: string;
  constructor() {}

  ngOnInit() {}
}
