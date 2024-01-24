import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPiComponent } from './get-api.component';

describe('GetAPiComponent', () => {
  let component: GetAPiComponent;
  let fixture: ComponentFixture<GetAPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAPiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
