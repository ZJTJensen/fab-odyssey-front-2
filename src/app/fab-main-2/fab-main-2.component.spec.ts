import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabMain2Component } from './fab-main-2.component';

describe('FabMain2Component', () => {
  let component: FabMain2Component;
  let fixture: ComponentFixture<FabMain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabMain2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
