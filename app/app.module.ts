import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';


import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [ // all comonents
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [ //3rd party module
    BrowserModule,    
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // starting component
})
export class AppModule { }
