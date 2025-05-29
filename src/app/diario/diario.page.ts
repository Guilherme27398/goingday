import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
  standalone: false
})
export class DiarioPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(path: string) {
    this.router.navigate([`/tabs/${path}`]);
  }

  goToListaDiarios() {
    this.router.navigate(['/lista-diarios'], { replaceUrl: true });
  }
}
