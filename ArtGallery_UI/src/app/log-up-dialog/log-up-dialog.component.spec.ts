import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogUpDialogComponent } from './log-up-dialog.component';

describe('LogUpDialogComponent', () => {
  let component: LogUpDialogComponent;
  let fixture: ComponentFixture<LogUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
