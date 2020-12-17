import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeButtonComponent } from './search-recipe-button.component';

describe('SearchRecipeButtonComponent', () => {
  let component: SearchRecipeButtonComponent;
  let fixture: ComponentFixture<SearchRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRecipeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
