import { Component, OnInit } from '@angular/core';
import { Currency } from '../Currency';
import { FirebaseService } from "../firebase.service";
@Component({
  selector: 'app-cale',
  templateUrl: './cale.component.html',
  styleUrls: ['./cale.component.css']
})
export class CaleComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  Currency: Currency[];
  ngOnInit() {
    this.firebaseService.getCurrency().subscribe(val => {
      this.Currency = val;
    });
  
  }

}