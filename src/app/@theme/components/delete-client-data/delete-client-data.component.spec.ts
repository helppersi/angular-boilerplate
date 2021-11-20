import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientDataComponent } from './delete-client-data.component';

describe('DeleteClientDataComponent', () => {
  let component: DeleteClientDataComponent;
  let fixture: ComponentFixture<DeleteClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
