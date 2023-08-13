import { Component } from '@angular/core';
import { CommunityItem } from 'src/app/components/communityComponents/community-item';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent {
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
    }
  ];
}
