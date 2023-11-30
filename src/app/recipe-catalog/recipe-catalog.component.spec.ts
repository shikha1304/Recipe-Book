import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCatalogComponent } from './recipe-catalog.component';

describe('RecipeCatalogComponent', () => {
  let component: RecipeCatalogComponent;
  let fixture: ComponentFixture<RecipeCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
