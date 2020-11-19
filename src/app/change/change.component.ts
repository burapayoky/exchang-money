import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-change",
  templateUrl: "./change.component.html",
  styleUrls: ["./change.component.css"]
})
export class ChangeComponent implements OnInit {
  form = new FormGroup({
    e: new FormControl(""),
    g: new FormControl("")
  });
  amount: number;
  name: string;
  currentVal: number;
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  ngOnInit() {}

  naMe(val, cal) {
    this.currentVal = val;
    this.name = cal;
    if (this.name == "AUD") {
      this.amount = this.currentVal * 0.045;
    }
    if (this.name == "CAD") {
      this.amount = this.currentVal * 0.043;
    }
    if (this.name == "CNY") {
      this.amount = this.currentVal * 0.21;
    }
    if (this.name == "EUR") {
      this.amount = this.currentVal * 0.028;
    }
    if (this.name == "GBP") {
      this.amount = this.currentVal * 0.025;
    }
    if (this.name == "HKD") {
      this.amount = this.currentVal * 0.255;
    }
    if (this.name == "IDR") {
      this.amount = this.currentVal * 466.01;
    }
    if (this.name == "INR") {
      this.amount = this.currentVal * 2.44;
    }
    if (this.name == "JPY") {
      this.amount = this.currentVal * 3.41;
    }
    if (this.name == "KRW") {
      this.amount = this.currentVal * 36.74;
    }
    if (this.name == "LAK") {
      this.amount = this.currentVal * 306.29;
    }
    if (this.name == "MMK") {
      this.amount = this.currentVal * 43.08;
    }
    if (this.name == "MYR") {
      this.amount = this.currentVal * 0.13;
    }
    if (this.name == "PHP") {
      this.amount = this.currentVal * 1.59;
    }
    if (this.name == "SGD") {
      this.amount = this.currentVal * 0.044;
    }
    if (this.name == "SEK") {
      this.amount = this.currentVal * 0.28;
    }
    if (this.name == "TWD") {
      this.amount = this.currentVal * 0.94;
    }
    if (this.name == "USD") {
      this.amount = this.currentVal * 0.033;
    }
    if (this.name == "VND") {
      this.amount = this.currentVal * 765.41;
    }
    this.onCurrency();
  }
  onCurrency() {
    this.firebaseService.addData(
      this.form.value.e=this.name, 
      this.form.value.g=this.amount);
    this.router.navigate(["/"]);
  }
}
