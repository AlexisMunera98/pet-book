import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-details.component';
import {ImageService} from '../image.service';
import {ActivatedRoute} from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [
        ImageService,
        ActivatedRoute
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
