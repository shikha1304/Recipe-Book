import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsDialogComponent } from './add-ins-dialog.component';

describe('AddInsDialogComponent', () => {
  let component: AddInsDialogComponent;
  let fixture: ComponentFixture<AddInsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
