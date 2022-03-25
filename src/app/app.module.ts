import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeFormComponent } from './shape-form/shape-form.component';
import { SvgComponent } from './svg/svg.component';
import { FormsModule } from '@angular/forms';
import { ShapeService } from './shape.service';
import { UpdateService } from './Services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShapeFormComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [ShapeService, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
