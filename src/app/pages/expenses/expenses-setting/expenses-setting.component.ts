import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'app-expenses-setting',
  templateUrl: './expenses-setting.component.html',
  styleUrls: ['./expenses-setting.component.css']
})
export class ExpensesSettingComponent implements OnInit {
  setting : any;
  constructor(private svc: FirestoreService) { 
    this.svc.getSettings().subscribe((res:any) => {
      this.setting = res.data();
    })
  }

  save(){
    this.svc.updateSettings(this.setting);
  }

  ngOnInit() {
  }

}
