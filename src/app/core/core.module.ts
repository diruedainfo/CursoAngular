import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./api/error.interceptor";
import {AuthInterceptor} from "../auth/api/auth.interceptor";
import {StorageBase} from "./utils/storage.base";
import {environment} from "../../environments/environment";
import {SessionStorage} from "./utils/session-storage.service";
import {LocalStorage} from "./utils/local-storage.service";
import {Storage} from "./utils/storage.interface";



@NgModule({
  declarations: [HeaderComponent, TitleComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },*/
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: StorageBase,
      useFactory: (): Storage => {
        if (environment.production) return new SessionStorage();
        else return new LocalStorage();
      },
    },
  ],
})
export class CoreModule {}
