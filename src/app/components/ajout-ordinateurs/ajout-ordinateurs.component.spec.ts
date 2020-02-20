import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdinateursComponent } from './ajout-ordinateurs.component';

describe('AjoutOrdinateursComponent', () => {
  let component: AjoutOrdinateursComponent;
  let fixture: ComponentFixture<AjoutOrdinateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOrdinateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOrdinateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
