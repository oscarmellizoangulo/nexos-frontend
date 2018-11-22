import {Injectable} from "@angular/core";

import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ConfigurationRestService } from "./configuration.rest.service";
import { HttpClient } from "../../../node_modules/@angular/common/http";

@Injectable()
export class UserService{
    constructor(private http: HttpClient, private config:ConfigurationRestService){

    }
    authentication(userAthentication): Observable<any> {
        //alert(JSON.stringify(userAthentication));
        return this.http.post<any>(this.config.endpoint + 'users/authentication', JSON.stringify(userAthentication), this.config.httpOptions).pipe(
            tap((user) => console.log(user.userName)),
            catchError(this.config.handleError<any>('users/authentication'))
          );
    }
    recovery(userName): Observable<any>{
        alert(JSON.stringify(userName));
        return this.http.post<any>(this.config.endpoint + 'users/recovery', JSON.stringify(userName), this.config.httpOptions).pipe(
            tap((result) => console.log(result.message)),
            catchError(this.config.handleError<any>('users/recovery'))
          );
    }
    
}