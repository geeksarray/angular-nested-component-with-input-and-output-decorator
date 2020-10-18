import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() SalesRating:number = 3.5;  
  @Output() GetLocalSales: EventEmitter<string> = new EventEmitter<string>(); 
  _salesRating: string = 'Default'; 

  ngOnInit(): void {
  }

  onClick():void{  
    this.GetLocalSales.emit(`The local sales report for this product is ${this._salesRating}`);  
} 

  ngOnChanges() : void{  
    if(this.SalesRating == 3.5){  
        this._salesRating = 'Good';  
    } else if (this.SalesRating == 4.0){  
        this._salesRating = 'Very Good'  
    } else if(this.SalesRating == 4.5){  
        this._salesRating = 'Excellent'  
    } else {  
        this._salesRating = 'Undefined'  
    }
 }  

  

}
