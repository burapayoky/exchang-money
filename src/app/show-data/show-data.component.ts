import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Currency } from '../Currency'
import {  FirebaseService } from '../firebase.service'
@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  constructor(private firebaseService:FirebaseService) { }
  @Input() Currency: Currency;
  ngOnInit() {
    console.log(this.Currency.rate);
    }
  
  del(){
    if(window.confirm("confirm")){
      this.firebaseService.deleteCurrency(this.Currency.id).then(()=>{
        alert("deleteComplete");
      })
      .catch(err=>
      {alert("deleteFailure")})
    }
  }
}
  

