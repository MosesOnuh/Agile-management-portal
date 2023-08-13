import { Component, Input } from '@angular/core';
import { SideBarItem } from '../side-bar-item';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css'],
})
export class SideBarItemComponent {
  @Input() item!: SideBarItem;
}
