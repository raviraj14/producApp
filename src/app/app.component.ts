import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Product App';
  footer = 'All Rights Reserved By @Product App';
  discriptions: any;
  totalItems: any = [];

  productTitile : any;
  loding: any;



  constructor(public api : ApiService){}

   products : any = [];

  ngOnInit() : void{
    this.api.getProduct().subscribe((res : any)=>{
     this.products = res;





     console.log(this.products)
     this.products.sort((a : any, b : any) =>{
     return a.price - b.price
    })
    })


  }

  addItem(item : any){
    this.totalItems.push(item)
    console.log(item, this.totalItems.length);
  }



}
