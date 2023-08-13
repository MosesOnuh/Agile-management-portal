import { Component } from '@angular/core';
import { ChatMessage } from '../chat-message';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css'],
})
export class MessageHistoryComponent {
  myId: string = '1234';
  messages: ChatMessage[] = [
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message: "Hello, how's everyone doing",
    },
    {
      id: '12',
      name: 'Micheal',
      role: 'Designer',
      message: 'I am doing great',
    },
    {
      id: '45',
      name: 'Precious',
      role: 'QA',
      message: 'Guys, Gaps is down. Somethin must be done quickly',
    },
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message:
        'That has been resolved two years ago. Are you sure you are in this bank',
    },
    {
      id: '1234999',
      name: 'Oga bos',
      role: 'Manager',
      message: "Hello, how's everyone doing",
    },
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message: 'We are doing great sir',
    },
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message: "Hello, how's everyone doing",
    },
    {
      id: '12',
      name: 'Micheal',
      role: 'Designer',
      message: 'I am doing great',
    },
    {
      id: '45',
      name: 'Precious',
      role: 'QA',
      message: 'Guys, Gaps is down. Somethin must be done quickly',
    },
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message:
        'That has been resolved two years ago. Are you sure you are in this bank',
    },
    {
      id: '1234999',
      name: 'Oga bos',
      role: 'Manager',
      message: "Hello, how's everyone doing",
    },
    {
      id: '1234',
      name: 'Moses',
      role: 'Engineer',
      message: 'We are doing great sir',
    },
  ];
}
