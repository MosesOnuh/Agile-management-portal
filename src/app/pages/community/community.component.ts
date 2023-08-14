import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommunityItem } from '../../components/communityComponents/community-item';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from 'src/app/components/communityComponents/chat-message';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit, OnDestroy {
  groups: CommunityItem[] = [
    {
      title: 'Product Owner',
      firstIcon: '../../../assets/icons/productOwner.svg',
    },
    {
      title: 'Enterprise Coach',
      firstIcon: '../../../assets/icons/whistle.svg',
    },
    {
      title: 'Scrum Masters',
      firstIcon: '../../../assets/icons/scrum.svg',
    },
    {
      title: 'Developers',
      firstIcon: '../../../assets/icons/developers.svg',
    },
  ];

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.createChatConnection();
  }

  ngOnDestroy(): void {
    this.chatService.stopChatConnection();
  }
}
