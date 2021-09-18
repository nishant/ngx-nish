import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionDividerComponent } from './page-section-divider.component';

describe('PageSectionDividerComponent', () => {
  let component: PageSectionDividerComponent;
  let fixture: ComponentFixture<PageSectionDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSectionDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
