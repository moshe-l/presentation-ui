import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) {
  
  }
  getCount(){
    return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').get();
  }

  listen(){
    return this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').valueChanges();        
  }
  change(newID){
    this.db.collection('page').doc('wJn13ywMDNiy9cq0ElgN').update({current : newID}); 
  }

}