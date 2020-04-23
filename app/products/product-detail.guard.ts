import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router : Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot, //to provide current route information,
    state: RouterStateSnapshot //to provide state information
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("NE " + next + " next.url[1] " + next.url[1] + " next.url[1].path " + next.url[1].path);
   let id = +next.url[1].path;
   if(isNaN(id) || id < 1) {
     alert('Invaid Product Id');
     this.router.navigate(['/products']);
     return false;
   }
    return true;
  }
  
}
