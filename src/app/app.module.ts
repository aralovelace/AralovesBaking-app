import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipesService} from "./recipes/recipes.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthInterceptorService} from "./auth/auth.interceptor.service";
import {RecipesModules} from "./recipes/recipe.modules";
import {ShoppingListModule} from "./shopping-list/shopping-list-module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AuthComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModules,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipesService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
