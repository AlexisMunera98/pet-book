import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-details/image-details.component';
import { FilterImagesPipes } from './filterimages.pipe';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterImagesPipes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //NgbModule
  ],
  providers: [ImageService, FilterImagesPipes],
  bootstrap: [AppComponent]
})
export class AppModule { }
