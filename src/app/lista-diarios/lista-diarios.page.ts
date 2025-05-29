import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-diarios',
  templateUrl: './lista-diarios.page.html',
  styleUrls: ['./lista-diarios.page.scss'],
  standalone: false
})
export class ListaDiariosPage implements OnInit {
  diarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/diarios.json').subscribe(data => {
      this.diarios = data;
    });
  }
}
