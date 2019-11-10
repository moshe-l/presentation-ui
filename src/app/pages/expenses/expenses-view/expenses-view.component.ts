import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';


@Component({
  selector: 'app-expenses-view',
  templateUrl: './expenses-view.component.html',
  styleUrls: ['./expenses-view.component.css']
})
export class ExpensesViewComponent implements OnInit {
  expens: Expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null };
  //oldExpenses: any;

  monthNames = ["ינואר", "פבואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
  ];
  currentMonthName: string;

  setting: any;

  groceryBalance: number;
  homeBalance: number;
  entertainmentBalance: number;

  grocerySum: number;
  homeSum: number;
  entertainmentSum: number;
  fullSum: number;
  selectedMonthExpenses: any[];

  year: number;
  month: number;
  constructor(private svc: FirestoreService) {
    this.getPerMonth(true);
  }

  ngOnInit() {
  }

  add() {
    console.log(this.expens);
    if (!this.validation()) {
      alert("מלאו את כל השדות חבר'ה");
      return;
    }
    this.svc.addItem(this.expens).then(res => {
      alert("הפעולה בוצעה בהצלחה!!!")
      if (this.expens.date.getMonth() == this.month) {
        this.expens.tempId = res.id;
        this.selectedMonthExpenses.push(this.expens);
        this.calcBalances();
      }
      this.expens = { tempId: null, amount: null, date: new Date(), desc: "", type: null };
    }).catch(err => {
      alert("שגיאה : " + err);
    });
  }
  validation() {
    if (this.expens.amount != null && this.expens.desc != "" && this.expens.type != null && this.expens.date != null)
      return true;
    return false;
  }
  // getOldAndSetting(){
  //   var setting$ = this.svc.getSettings();
  //   var oldExpenses$ =  this.svc.getAll();
  //   combineLatest(setting$, oldExpenses$, (setting,oldExpenses) => ({setting,oldExpenses})).subscribe(pair => {

  //     this.oldExpenses = pair.oldExpenses.docs.map((i) => { return { id: i.id, ...i.data() } });
  //     this.oldExpenses.map(i => i.date = new Date(i.date.seconds * 1000));

  //     console.log(this.oldExpenses);
  //     this.setting = pair.setting.data();    

  //     this.calcBalances();
  //   })
  // }

  getPerMonth(toBringSetting: boolean = false) {
    if (this.month == null) {
      var date = new Date();
      this.month = date.getMonth();
      this.year = date.getFullYear();
    }
    this.currentMonthName = this.monthNames[this.month];

    this.svc.getExpensesPerMonth(this.year, this.month)
      .subscribe(res => {
        this.selectedMonthExpenses = res.docs.map((i) => { return { id: i.id, ...i.data() } });
        this.selectedMonthExpenses.map(i => i.date = new Date(i.date.seconds * 1000));
        console.log(this.selectedMonthExpenses);
        if (toBringSetting) {
          this.svc.getSettings().subscribe(res => {
            this.setting = res.data();
            this.calcBalances();
          });
        }
        else {
          this.calcBalances();
        }


      })
  }

  calcBalances() {
    
    this.groceryBalance = this.calcBalance('grocery');
    this.homeBalance = this.calcBalance('home');
    this.entertainmentBalance = this.calcBalance('entertainment');

    this.homeSum = this.calcSum('home');
    this.entertainmentSum = this.calcSum('entertainment');
    this.grocerySum = this.calcSum('grocery');
    this.fullSum = this.homeSum + this.entertainmentSum + this.grocerySum;
  }

  calcBalance(type) {
    var items = this.selectedMonthExpenses.filter(e => e.type == type);
    var sum = items.map(i => i.amount).reduce((a, b) => a + b, 0);
    return this.setting[type] - sum;
  }
  calcSum(type) {
    var items = this.selectedMonthExpenses.filter(i => i.type == type);
    var sum = items.map(i => i.amount).reduce((a, b) => a + b, 0);
    return sum;
  }

  deleteItem(item) {
    if (!confirm('בטוח? לא לעבוד על המערכת בבקשה'))
      return;
    var id = (item.id != null ? item.id : item.tempId);
    this.svc.deleteExspensItem(id).then(res => {
      alert("הפריט נמחק!!!");
      this.selectedMonthExpenses = this.selectedMonthExpenses.filter(e => e.id != id && e.tempId != id);
      this.calcBalances();
    }).catch(err => {
      alert(err);
    })

  }


  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }

  getType(type) {
    switch (type) {
      case 'home':
        return 'בית';
      case 'grocery':
        return 'מכולת';
      case 'entertainment':
        return 'בילויים';
      default:
        break;
    }
  }

}

export interface Expens {
  tempId: string;
  amount: number;
  date: Date;
  desc: string;
  type: expensType;
}

export enum expensType {
  home, grocery, entertainment
}
