import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxListComponent } from './dropbox-list.component';

describe('DropboxListComponent', () => {
  let component: DropboxListComponent;
  let fixture: ComponentFixture<DropboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropboxListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
