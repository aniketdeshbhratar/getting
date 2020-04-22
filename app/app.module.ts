import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';


import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ // all comonents
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [ //3rd party module
    BrowserModule,    
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products' , component : ProductListComponent},
      {path : 'products/:id' , component : ProductDetailComponent},
      {path: 'welcome' , component : WelcomeComponent},
      {path : '' , redirectTo : 'welcome' , pathMatch : 'full'},
      {path : '**' , redirectTo : 'welcome' , pathMatch: 'full'}

    ], {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent] // starting component
})
export class AppModule {

 }
