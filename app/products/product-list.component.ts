import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './product'

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
    pageTitle:string = 'Product list';
    imageWidth:number = 40;
    imageMargin: number = 2;
    showImage:boolean = false;


    _listFilter: string;

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value:string) {
      this._listFilter = value // everytime the value is change we can add here
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    filteredProducts: IProduct[];


    products: IProduct[] =[
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/icon_android.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/icon_apple.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/icon_chrome.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/icon_dribble.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/icon_fb.png"
        }
      ]
     
     constructor(){
       this.filteredProducts = this.products;
       this.listFilter = '';
     } 

  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    // debugger
    return this.products.filter(function(product: IProduct){
      return product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1;
    })
  }      
   toggleImage():void{       
        this.showImage= !this.showImage
   }   

   ngOnInit() {
     console.log('In Oninit')
   }
}