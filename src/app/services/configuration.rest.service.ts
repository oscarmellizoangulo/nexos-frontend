import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationRestService {
  endpoint = 'http://localhost:8080/nexos-api/';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  extractData(res: Response) {
    let body = res;
    return body || { };
  }
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error("error -> " + error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(operation + " failed: " + error.message);

      console.log("result -> " + result);
      // Let the app keep running by returning an empty result.
      return throwError(error);
    };
  }

  
}
