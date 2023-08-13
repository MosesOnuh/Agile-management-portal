import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GTCO-Agile-COE-Portal';
  // displaySideNav: boolean = true;
  displaySideNav: boolean = false;

  constructor(private router: Router) {
    this.displaySideNav = false;

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //Hide side navigation on the home page
        // this.displaySideNav = event.url !== '/login';
        this.displaySideNav = event.url == '/community';
      }
    });
  }
}
