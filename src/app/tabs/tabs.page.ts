import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone:false
})
export class TabsPage {
  constructor(private router: Router) {}

  goToPage(path: string) {
    this.router.navigate([`/tabs/${path}`]);
  }
}
