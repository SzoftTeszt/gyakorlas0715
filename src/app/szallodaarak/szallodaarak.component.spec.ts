import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzallodaarakComponent } from './szallodaarak.component';

describe('SzallodaarakComponent', () => {
  let component: SzallodaarakComponent;
  let fixture: ComponentFixture<SzallodaarakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzallodaarakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzallodaarakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
