import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngDialogComponent } from './add-ing-dialog.component';

describe('AddIngDialogComponent', () => {
  let component: AddIngDialogComponent;
  let fixture: ComponentFixture<AddIngDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
