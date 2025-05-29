import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listadiario',
  templateUrl: './listadiario.page.html',
  styleUrls: ['./listadiario.page.scss'],
  standalone:false
})
export class ListadiarioPage implements OnInit {
  viagens: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/viagens.json').subscribe(data => {
      this.viagens = data;
    });
  }
}
