import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';


import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StarComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild([
      {path : 'products' , component : ProductListComponent},
      {path : 'products/:id' , component : ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
