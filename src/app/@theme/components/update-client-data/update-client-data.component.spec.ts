import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientDataComponent } from './update-client-data.component';

describe('UpdateClientDataComponent', () => {
  let component: UpdateClientDataComponent;
  let fixture: ComponentFixture<UpdateClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
