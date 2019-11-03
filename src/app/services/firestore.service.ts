import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) {

  }
  // view
  getCount() {
    return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').get();
  }
  listen() {
    return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').valueChanges();
  }
  change(newID) {
    this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').update({ current: newID });
  }

  // or hahaim
  addParasha(name , id) {
    this.db.collection('tora').add({
      bookId: 5,
      comment: "",
      fifth: false,
      first: false,
      fourth: false,
      id: id,
      name: name,
      second: false,
      seventh: false,
      sixth: false,
      third: false
    });
  }
  getTora(){
    return this.db.collection('tora').get();
  }
  updateStudy(docId, filedName , value){    
    this.db.collection('tora').doc(docId).update({ [filedName] : value})
    .then(res => alert("העידכון בוצע"))
    .catch(err => alert("אירעה שגיאה בעדכון"))
  }

  //expenses
  getSettings(){
    return this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').get();
  }
  updateSettings(model){ 
    this.db.collection('expenses-settings').doc('3VnbcOMGeFeMWTiallER').update(model);
  }
  
  addItem(item){
   return this.db.collection('expenses').add(item);
  }
  getAll(){
    return this.db.collection('expenses').get();
  }
  getExpensesPerMonth(year , month){
    console.log(year + " " + month)
    var startStr = `${year}-${Number.parseInt(month) + 1}-01`;
    var endStr = `${year}-${Number.parseInt(month) + 1}-31`;
    console.log(startStr + " " + endStr)
    let start = new Date(startStr);
    let end = new Date(endStr);
   
    console.log(start + " " + end)
    return this.db.collection('expenses', ref => ref.where('date', '>=', start).where('date', '<=', end)).get();
  }
  deleteExspensItem(id){
    return this.db.collection('expenses').doc(id).delete();
  }
}