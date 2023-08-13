import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGroupItemComponent } from './community-group-item.component';

describe('CommunityGroupItemComponent', () => {
  let component: CommunityGroupItemComponent;
  let fixture: ComponentFixture<CommunityGroupItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityGroupItemComponent]
    });
    fixture = TestBed.createComponent(CommunityGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
