import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'frontend';
  totalPages = 57;
  currentPage = 11;
  author: any;
  news: any;

  constructor(private dataservice: DataService) {
     
  }
  ngOnInit(): void {
    this.dataservice.getAuthors().subscribe(response => {
      this.author = response.find(author => author.id === 1)
      console.log(this.author)
    })
    this.dataservice.getNews().subscribe(response => {
      this.news = response.find(news => news.id === 1)
      console.log(this.news)
    })
  }
  onPageChanged(newPage: number): void {
    this.currentPage = newPage;
  }
  getImage(imagedata: string): string{
    if (imagedata){return './resources/' + imagedata;
    } else{return ''}
  }
}
