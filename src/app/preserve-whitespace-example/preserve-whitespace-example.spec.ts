import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserveWhitespaceExample } from './preserve-whitespace-example';

describe('PreserveWhitespaceExample', () => {
  let component: PreserveWhitespaceExample;
  let fixture: ComponentFixture<PreserveWhitespaceExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreserveWhitespaceExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreserveWhitespaceExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
