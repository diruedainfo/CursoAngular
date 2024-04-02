import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public subtitle = 'Welcome on board';
  public author = 'Diego Rueda';
  public authorUrl = 'http://www.google.es';
  constructor() { }

  ngOnInit(): void {
  }

}
