import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadiarioPage } from './listadiario.page';

describe('ListadiarioPage', () => {
  let component: ListadiarioPage;
  let fixture: ComponentFixture<ListadiarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
