import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 carusaleArr: ICarusale[] = [
    { index: 0, isImg : false,  text: "בית הדין לעבודה הורה להסתדרות האחיות ונציגי משרד האוצר לצאת להליך גישור, שבמהלכו יוכלו האחיות לשמור על זכותן לנקוט עיצומים ולמשרד הבריאות תישמר האפשרות לקצץ בשכרן. יוכך" },
    { index: 1,  isImg : false, text: "בית הדין לעבודה הורה להסתדרות האחיות ונציגי משרד האוצר לצאת לה34534536ליך גישור, שבמהלכו יוכלו4564564 האחיות לשמור על זכותן לנקוט עיצומים ולמשרד הבריאות תישמר האפשרות לקצץ בשכרן. יוכך" },
    { index: 2, isImg : false,  text: "בית הדין לעבודה הורה להסתדרות האחיות ונציגי משרד האוצר לצאת להליך גישור, שבמהלכו 7567567יוכלו האחיות ל09-90-hjkhjשמור על זכותן לנקוט עיצומים ולמשרד הבריאות תישמר האפש90-90-רות לקצץ בשכרן. יוכך" },
    { index: 3,  isImg : true,  text : "assets/img/1.jpg" }
  ]
  currentView: ICarusale;
  isEditMode : boolean;

  constructor(private svc: FirestoreService, private route : ActivatedRoute) {
    this.svc.listen().subscribe((res : IRes) =>{
     this.currentView = this.carusaleArr.find(x => x.index == res.current)
    });
    this.route.params.subscribe(p => {
      if(p['isEdit'] == "1")
      {
        this.isEditMode = true;
      }
    })   
   
  
}
 

  arrowRight() {    
    if (this.currentView.index == this.carusaleArr.length - 1)
       this.svc.change(0);
    else
    this.svc.change(this.currentView.index + 1);
    }

  arrowLeft() { 
    if (this.currentView.index == 0)
    this.svc.change(this.carusaleArr.length - 1);
    else
    this.svc.change(this.currentView.index - 1);
  }

  ngOnInit() {
  }

}


export interface ICarusale {
  index: number;
  text: string;
  isImg : boolean;
}

export interface IRes{
  current : number;
}