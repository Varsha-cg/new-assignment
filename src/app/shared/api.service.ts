import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl= 'http://localhost:3000';

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  getProduct(){
    return this.http.get(this.baseUrl+"/Products").
    pipe( map ( (res:any) =>{
      return res;
    }))
  }

  getCat(){
    return this.http.get(this.baseUrl+"/pro_cat").
    pipe( map ( (res:any) =>{
      return res;
    }))
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
  }
}
