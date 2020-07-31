import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RecipesModules} from "./recipes/recipe.modules";
import {ShoppingListModule} from "./shopping-list/shopping-list-module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModules,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
