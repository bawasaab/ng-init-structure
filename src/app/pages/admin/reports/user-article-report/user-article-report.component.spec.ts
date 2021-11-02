import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticleReportComponent } from './user-article-report.component';

describe('UserArticleReportComponent', () => {
  let component: UserArticleReportComponent;
  let fixture: ComponentFixture<UserArticleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserArticleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArticleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
