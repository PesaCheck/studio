import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStoriesComponent } from './social-stories.component';

describe('SocialStoriesComponent', () => {
  let component: SocialStoriesComponent;
  let fixture: ComponentFixture<SocialStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
