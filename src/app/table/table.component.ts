import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Currency } from "../Currency";
import { FirebaseService } from "../firebase.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor( private firebaseService: FirebaseService,) { }
  @Input() Currency: Currency;
  ngOnInit() {
  }
  headElements = ["สกุลเงิน", "อัตราการแลกเปลี่ยนต่อ 1 บาท"];
  elements: any = [
    { first: "ดอลลาร์ออสเตรเลีย (AUD)", last: "0.045" },
    { first: "ดอลลาร์แคนาดา (CAD)", last: "0.043" },
    { first: "หยวนจีน (CNY)", last: "0.21" },
    { first: "ยูโร (EUR)", last: "0.028" },
    { first: "ปอนด์ (GBP)", last: "0.025" },
    { first: "ดอลลาร์ฮ่องกง (HKD)", last: "0.255" },
    { first: "เงินรูเปียอินโดนีเซีย (IDR)", last: "466.01" },
    { first: "เงินรูปีของอินเดีย (INR)", last: "2.44" },
    { first: "เงินเยนของญี่ปุ่น (JPY)", last: "3.41" },
    { first: "เกาหลีวอน (KRW)", last: "36.74" },
    { first: "กีบลาว (LAK)", last: "306.29" },
    { first: "จ๊าดพม่า (MMK)", last: "43.08" },
    { first: "ริงกิตมาเลเซีย (MYR)", last: "0.13" },
    { first: "เงินเปโซของฟิลิปปินส์ (PHP)", last: "1.59" },
    { first: "ดอลลาร์สิงคโปร์ (SGD)", last: "0.044" },
    { first: "โครนสวีเดน (SEK)", last: "0.28" },
    //{first: 'บาทไทย (THB)', last: 'O'},
    { first: "ดอลลาร์ไต้หวันใหม่ (TWD)", last: "0.94" },
    { first: "สหดอลลาร์สหรัฐอเมริกา (USD)", last: "0.033" },
    { first: "ดงเวียดนาม (VND)", last: "765.41" }
  ];

}