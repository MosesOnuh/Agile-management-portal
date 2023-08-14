import { Component } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { ChatMessage } from '../chat-message';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent {
  content: string = '';
  constructor(public chatService: ChatService) {}

  sendMessage() {
    if (this.chatService.currentChatGroupDisplay == 'ProductOwner') {
      if (this.content.trim() !== '') {
        this.chatService.sendProductOwnerMessage(this.content);
      }

      this.content = '';
    }
  }
}
