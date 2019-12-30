import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

 carusaleArr: ICarusale[] = [];
  currentView: ICarusale;
  isEditMode : boolean;
  toViewAll : boolean;
  bg: string;
  title:string;
  imgHeight : string;
  constructor(private svc: FirestoreService,private github : GithubService, private route : ActivatedRoute, private sanitizer: DomSanitizer) {
      this.route.params.subscribe(p => {
      if(p['isEdit'] == "1")      
        this.isEditMode = true;      
      else if(p['isEdit'] == "2")
       this.toViewAll = true;
      this.imgHeight = (window.innerHeight -50)+ "px";
      console.log(window.innerHeight);
    })   

    this.github.get('img').subscribe((res : any)=>{  
      res.forEach(element => {
        console.log( element.name.split('.')[0].replace(/\D/g,''))
      });
     res.sort((a , b) =>
      Number.parseInt((a.name.split('.')[0]).replace(/\D/g,'')) 
      - 
      Number.parseInt((b.name.split('.')[0]).replace(/\D/g,'')));    
      // console.log(res)  
      for (let i = 0; i < res.length; i++) {
            this.carusaleArr.push({index : i, text : res[i].download_url })
       }      
       this.startListening();      
    }) 

    this.github.get('bg').subscribe((res : any)=>{  
      document.getElementsByTagName("body")[0].style.background =     
      "linear-gradient(rgba(224, 209, 209, 0.7), rgba(218, 202, 202, 0.7)), url(" + res[0].download_url + ") no-repeat center center fixed"     
     }) 


     this.github.getTitle().subscribe((res : any)=>{    
     this.title = res;  
     }) 


}

 startListening(){
  this.svc.listen().subscribe((res : IRes) =>{    
    this.currentView = this.carusaleArr.find(x => x.index == res.current);
   });
 }

  changeByIndex(id){
    if(this.toViewAll)
    this.svc.change(id);
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
  sanitize(style: string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
  ngOnInit() {
  }

}


export interface ICarusale {
  index: number;
  text: string;
 // isImg : boolean;
}

export interface IRes{
  current : number;
}