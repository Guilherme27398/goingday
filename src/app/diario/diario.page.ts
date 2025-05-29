<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 66917f394424da61fce4909aedaa67652ce35d3d
import { Router } from '@angular/router';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
<<<<<<< HEAD
  standalone : false
})
export class DiarioPage {
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([`/tabs/${path}`]);
=======
  standalone: false
})
export class DiarioPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToListaDiarios() {
    this.router.navigate(['/lista-diarios'], { replaceUrl: true });
>>>>>>> 66917f394424da61fce4909aedaa67652ce35d3d
  }
}
