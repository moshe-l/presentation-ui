import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class GithubService {

   private header = new HttpHeaders({    
       'Content-Type': 'application/json'       
   });



   constructor(
    private http: HttpClient 
    ) {

  }
   
     get(path) {        
      return this.http.get("https://api.github.com/repos/moshe-l/presentation-images/contents/"+ path , {headers: this.header}).pipe(
        catchError((res: Response) => this.handleError(res))
      );     
      
   }
   getTitle() {        
    return this.http.get("https://raw.githubusercontent.com/moshe-l/presentation-images/master/title", { responseType: 'text' }).pipe(
      catchError((res: Response) => this.handleError(res))
    );     
    
      
 }
 
   private handleError(res) {
     console.log(res)
    const error = {
      statusCode: res.status,
      error: res.message
    };
    return throwError(error);
  }

}
