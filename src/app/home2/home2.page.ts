import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
  standalone : false
})
export class Home2Page implements OnInit {
  username = '';
  temViagens = false;

  viagensProximas: any[] = [];
  viagensHistorico: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username') || 'Utilizador';

    // Simulação de conta nova (sem viagens)
    this.viagensProximas = [];
    this.viagensHistorico = [];

    this.temViagens = this.viagensProximas.length > 0 || this.viagensHistorico.length > 0;
  }

  goToPage(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
