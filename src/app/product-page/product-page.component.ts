import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  one: boolean;
  prod: any;

  
  
  productos: Array<any> = [
    {
      _id: 1,
      name: "Taza",
      price: 123,
      desc: "Sirve para beber líquidos",
      pic: ""
    },{
      _id:2,
      name: "Silla",
      price: 456,
      desc: "Sirve para beber",
      pic: ""
    },{
      _id:3,
      name: "Mesa",
      price: 1789,
      desc: "Sirve para beber más",
      pic: ""
    }
  ]

  showProduct(producto){
    // this.=producto.name
    console.log(producto)
    this.one=true;
    this.prod= producto;

  }
  constructor(public router: Router) { }

  ngOnInit() {
    // this.router.navigate(['signup'])
  }

}
