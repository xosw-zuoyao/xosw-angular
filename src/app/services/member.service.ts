import {Injectable} from '@angular/core';
import {Member} from '../classes/member';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl = 'apidata/api/member';

  members: Member[];

  member: Member;

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  addMember(member: Member): Observable<Member> {
    const url = `${this.baseUrl}/members`;
    console.log(url);
    return this.http.post<Member>(url, member, httpOptions).pipe(
      tap((newMember: Member) => this.log(`added member w/ id=${newMember.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }

  getMember(id: number): Observable<Member> {
    const url = `${this.baseUrl}/members/${id}`;
    console.log(url);
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }

  getMembers(): Observable<Member[]> {
    const url = `${this.baseUrl}/members`;
    console.log(url);
    return this.http.get<Member[]>(url)
      .pipe(
        tap(_ => this.log('fetched members')),
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }

  updateMember(member: Member): Observable<any> {
    const url = `${this.baseUrl}/members`;
    console.log(url);
    return this.http.put(url, member, httpOptions).pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  deleteMember(member: Member | number): Observable<Member> {
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.baseUrl}/members/${id}`;
    console.log(url);
    return this.http.delete<Member>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }
}
