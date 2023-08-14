import { Component, Input} from '@angular/core';
import { CommunityItem } from '../community-item';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-community-group-item',
  templateUrl: './community-group-item.component.html',
  styleUrls: ['./community-group-item.component.css'],
})
export class CommunityGroupItemComponent {
  @Input() groupItem!: CommunityItem;

  constructor(public chatService: ChatService){}

  createGroupMessage(groupName: string) {
    if (groupName == 'Product Owner') {
      this.chatService.CreateProductOwnerGroup();
      this.chatService.currentChatGroupDisplay = "ProductOwner"
      console.log("created product owner chat");
    }
  }
}
