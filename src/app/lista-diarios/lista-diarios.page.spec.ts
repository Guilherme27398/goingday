import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDiariosPage } from './lista-diarios.page';

describe('ListaDiariosPage', () => {
  let component: ListaDiariosPage;
  let fixture: ComponentFixture<ListaDiariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDiariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
