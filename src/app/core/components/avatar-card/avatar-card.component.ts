import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss'],
})
export class AvatarCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageURL: string | undefined;
  constructor() {}

  get backgroundStyle() {
    return `url(/assets/images/${this.imageURL})`;
  }
}
