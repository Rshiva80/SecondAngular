import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerExample } from './host-listner-example';

describe('HostListnerExample', () => {
  let component: HostListnerExample;
  let fixture: ComponentFixture<HostListnerExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostListnerExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListnerExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
