import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
  standalone : false
})
export class DiarioPage {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`/tabs/${path}`]);
  }
}
