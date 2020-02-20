import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdinateursComponent } from './edit-ordinateurs.component';

describe('EditOrdinateursComponent', () => {
  let component: EditOrdinateursComponent;
  let fixture: ComponentFixture<EditOrdinateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrdinateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrdinateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
