import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDePubComponent } from './file-de-pub.component';

describe('FileDePubComponent', () => {
  let component: FileDePubComponent;
  let fixture: ComponentFixture<FileDePubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDePubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDePubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
