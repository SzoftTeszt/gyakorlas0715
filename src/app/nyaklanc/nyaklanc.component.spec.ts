import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyaklancComponent } from './nyaklanc.component';

describe('NyaklancComponent', () => {
  let component: NyaklancComponent;
  let fixture: ComponentFixture<NyaklancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyaklancComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyaklancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
