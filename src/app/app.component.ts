import { Component } from '@angular/core';
import { Book } from './Module/Book';
import { BookServiceService } from './Service/book.service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  book: Book[] = [];
  books: Book=new Book();
  errormessage:string="hi";
  flag:boolean=false;
  constructor(private bookservice:BookServiceService){}
  ngOnInit()
  {
    this.getBookFromServer();
   
  }
  getBookFromServer()
  {
      this.bookservice.getBook().subscribe(data=>{

        this.book=data;
        
      })
  }
  addBook()
  {
   if(this.books.name=="" ||this.books.author==""||this.books.language==""||this.books.year==0)
   {
      this.errormessage="field canot be empty"
      this.flag=true;
   }
   else
   {
    this.bookservice.addBookToServer(this.books).subscribe(result=>{
      this.books=new Book();
      this.books=result;
      this.flag=false;
      this.getBookFromServer();
      this.errormessage="";
    })
   }
  }
  reset()
  {
    this.books.name="";
    this.books.author="";
    this.books.language="";
    this.books.year=0;
    this.flag=false;

  }
  onSubmit()
  {
    this.addBook();
  }
}
