import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {


  public reloading = false;




  public reload(list:string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }

  ngOnInit(): void {
  }

}
