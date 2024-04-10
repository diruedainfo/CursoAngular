import { Component, OnInit } from '@angular/core';
import {StatusStore} from "../api/status.store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isWorking = false;
  public hasError = false;
  public mensaje = '';
  constructor(statusStore:StatusStore) {
    statusStore.getState$().subscribe(status =>{
      this.isWorking = status.isWorking;
      if (status.errorMessage !==''){
        this.hasError = true;
        this.mensaje = status.errorMessage;
      }

    })
  }

  ngOnInit(): void {
  }

}
