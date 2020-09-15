import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  collapseText = true;

  constructor() { }

  ngOnInit(): void {
  }

  collapse(): void {
  	this.collapseText = false;
  }

}
