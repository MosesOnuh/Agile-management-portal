import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatMessage } from '../chat-message';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css'],
})
export class MessageHistoryComponent implements OnInit {
  // myId: string = '1234';
  // messages: ChatMessage[] = [
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content: "Hello, how's everyone doing",
  //   },
  //   {
  //     id: '12',
  //     name: 'Micheal',
  //     role: 'Designer',
  //     content: 'I am doing great',
  //   },
  //   {
  //     id: '45',
  //     name: 'Precious',
  //     role: 'QA',
  //     content: 'Guys, Gaps is down. Somethin must be done quickly',
  //   },
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content:
  //       'That has been resolved two years ago. Are you sure you are in this bank',
  //   },
  //   {
  //     id: '1234999',
  //     name: 'Oga bos',
  //     role: 'Manager',
  //     content: "Hello, how's everyone doing",
  //   },
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content: 'We are doing great sir',
  //   },
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content: "Hello, how's everyone doing",
  //   },
  //   {
  //     id: '12',
  //     name: 'Micheal',
  //     role: 'Designer',
  //     content: 'I am doing great',
  //   },
  //   {
  //     id: '45',
  //     name: 'Precious',
  //     role: 'QA',
  //     content: 'Guys, Gaps is down. Somethin must be done quickly',
  //   },
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content:
  //       'That has been resolved two years ago. Are you sure you are in this bank',
  //   },
  //   {
  //     id: '1234999',
  //     name: 'Oga bos',
  //     role: 'Manager',
  //     content: "Hello, how's everyone doing",
  //   },
  //   {
  //     id: '1234',
  //     name: 'Moses',
  //     role: 'Engineer',
  //     content: 'We are doing great sir',
  //   },
  // ];

  constructor(public chatService: ChatService) {}
  @Input() messages: ChatMessage[] = [];
  // @Output() OldMessagesEmitter =  new EventEmitter<ChatMessage[]>();
  myId: string = this.chatService.myUserId;

  ngOnInit(): void {
    if (this.chatService.currentChatGroupDisplay == 'ProductOwner') {
      // this.getOldProductOwnerMessages() ;
      this.chatService.getOldProductOwnerMessages();
    }

    // this.initializePO = true;
  }

  // getOldProductOwnerMessages(){
  //   this.chatService.getProductOwnerMessages().subscribe({
  //     next: (response) => {
  //       this.OldMessagesEmitter.emit(response);
  //     },
  //     error: (error) => {
  //       // this.loginApiErrorMessages.push(error.error.title || error.error.error);
  //       console.log(error.error.title || error.error.error)
  //     },
  //   });
  // }
}
