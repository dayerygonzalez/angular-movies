import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Auth } from '../models/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'https://angular-movies-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  /** Creates a new user on the server **/
  signup (user: User): Observable<Auth> {
    return this.http.post<User>(this.apiURL + 'auth/local/register', user, httpOptions).pipe(
      tap((auth: Auth) => this.log(`added user w/ id=${auth.user._id}`)),
      catchError(this.handleError<Auth>('signup'))
    );
  }

  login(user: User): Observable<Auth> {
    return this.http.post<User>(this.apiURL + 'auth/local', {
      identifier: user.username,
      password: user.password
    }, httpOptions).pipe(
      tap((auth: Auth) => this.log(`logged in as w/ id=${auth.user._id}`)),
      catchError(this.handleError<Auth>('login'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message in the console */
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
