import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Module/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  getBook():Observable<Book[]>
  {
    return this.http.get<Book[]>("http://localhost:3000/Book");
  }

  addBookToServer(data:Book):Observable<Book>
  {
     return this.http.post<Book>("http://localhost:3000/Book",data);
  }
  
}
