import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
import {LoggingService} from "./logging.service";
import * as fromApp from'./store/app.reducer';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducers)
  ],

  bootstrap: [AppComponent],
  providers: [LoggingService]
})
export class AppModule { }
