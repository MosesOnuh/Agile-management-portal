import { Component, Input} from '@angular/core';
import { CommunityItem } from '../community-item';

@Component({
  selector: 'app-community-group-item',
  templateUrl: './community-group-item.component.html',
  styleUrls: ['./community-group-item.component.css'],
})
export class CommunityGroupItemComponent {
  @Input() groupItem!: CommunityItem;
}
