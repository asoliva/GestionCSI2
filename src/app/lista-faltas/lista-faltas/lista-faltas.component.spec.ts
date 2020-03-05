import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFaltasComponent } from './lista-faltas.component';

describe('ListaFaltasComponent', () => {
  let component: ListaFaltasComponent;
  let fixture: ComponentFixture<ListaFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
