import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ListProduct:any;
  selected!:number;

  selectedCatagory:any;

  productCat:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe( (res)=> {
      this.ListProduct = res;
      // console.log(this.ListProduct);
      this.ListProduct.forEach((a:any) => {
        if(a.p_category==="Premium" || a.p_category ==="Tamilnadu"){
          a.p_category ="All"
        }
        Object.assign(a,{quantity:1});
      });
      console.log(this.ListProduct)
    })

    this.api.getCat()
    .subscribe( (res)=> {
      this.productCat = res;
      this.selected = 1;
    })
    
  }
 

  onChange(a:any){
    let catVal: any;
    console.log(a+"selected value");
    for(let i=0;i<this.productCat.length;i++){
      if(a==this.productCat.id){
        catVal = this.productCat.p_category;
        console.log(catVal+"catVal")
      }
      
    }
    for(let j=0 ;j<this.ListProduct.length;j++){
      if(catVal==this.ListProduct.p_category){

        if(this.selectedCatagory){
          this.selectedCatagory = [...this.selectedCatagory,this.ListProduct[j]];

        }else{
          this.selectedCatagory = [this.ListProduct[j]]
        }
      }
    }
    console.log(this.selectedCatagory);
  }

  addCart(item: any){
    this.api.addtoCart(item);
  }

}
