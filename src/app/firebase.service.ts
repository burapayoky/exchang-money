import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { race } from 'rxjs';
import { Currency } from "./Currency";
@Injectable()
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  getName(id: string){
    let DocRef = this.firestore.collection<Currency>("Currency", e => e.where('name', '==', name))

    return DocRef.valueChanges()
  }
  getExcangrate(id: string){
    let DocRef = this.firestore.collection<Currency>("Currency", e => e.where('rate', '==', id))
    

    return DocRef.valueChanges()
  }
  getCurrency(){
    let DocRef = this.firestore.collection<Currency>("Currency", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();}
  addData(n, change) {
    let Currency = {
      name: n,
      rate: change,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("Currency").add(Currency);

    ref.then(newRef => {
      const updateID = {
        id: newRef.id
      };
      newRef.update(updateID);
    });
    return ref;
  }
  deleteCurrency(id: string) {
    return this.firestore
      .collection("Currency")
      .doc(id)
      .delete();
  }
}