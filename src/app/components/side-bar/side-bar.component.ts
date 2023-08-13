import { Component } from '@angular/core';
import { SideBarItem } from '../sideBarComponents/side-bar-item';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  items: SideBarItem[] = [
    {
      title: 'Dashboard',
      firstIcon: '../../../assets/icons/dashboard.svg',
      // secondIcon: '',
    },
    {
      title: 'Library',
      firstIcon: '../../../assets/icons/library.svg',
      secondIcon: '',
    },
    {
      title: 'Events',
      firstIcon: '../../../assets/icons/events.svg',
      secondIcon: '',
    },
    {
      title: 'Development',
      firstIcon: '../../../assets/icons/development.svg',
      secondIcon: '',
    },
    {
      title: 'Community',
      firstIcon: '../../../assets/icons/community.svg',
      secondIcon: '',
    },
    {
      title: 'Agile Games',
      firstIcon: '../../../assets/icons/games.svg',
      secondIcon: '',
    }
  ];
}
