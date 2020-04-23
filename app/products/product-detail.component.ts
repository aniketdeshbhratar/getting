import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail'
  product: IProduct;

  constructor(private route: ActivatedRoute, private router:Router) {

   }

  onBack():void {
    this.router.navigate(['/products'])
    
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    console.log(`this.route $this.route , snapshot ${this.route.snapshot} , param ${this.route.snapshot.paramMap}`)
    
    this.pageTitle += `${id}`;
    this.product = {
      "productId" : id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/icon_android.png"
    }
    
  }

}
