/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPollComponent } from './editPoll.component';

describe('EditPollComponent', () => {
  let component: EditPollComponent;
  let fixture: ComponentFixture<EditPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
