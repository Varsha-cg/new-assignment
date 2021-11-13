import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  Date: Date = new Date();
  year = this.Date.getFullYear();

  ngOnInit(): void {
  }

}
