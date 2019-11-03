import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-or-hahaim',
  templateUrl: './or-hahaim.component.html',
  styleUrls: ['./or-hahaim.component.css']
})
export class OrHahaimComponent implements OnInit {
  name : string
  id : number = 43;
  toraList : any[];
  constructor(private svc: FirestoreService,) {
      this.svc.getTora().subscribe((res : any) => {
        this.toraList = (res.docs.map((doc) => {
          return { guid: doc.id, ...doc.data() }
        })).sort((a , b) => a.id - b.id);
        console.log(this.toraList)
      })
   }
  send(){
    this.id++;
    this.svc.addParasha(this.name, this.id)
  }

  update(guid, name , event){    
    this.svc.updateStudy(guid,name,event.target.checked);
  }

  lastId = 0;
  isBookName(id){
    var res;
    if(id != this.lastId)
    res = true;
      else
      res = false;
      this.lastId = id;
      return res;
  }

  ngOnInit() {
  }

}
