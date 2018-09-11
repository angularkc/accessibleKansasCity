import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { AppRoutingModule } from './/app-routing.module';
import { FocusDemoComponent } from './focus-demo/focus-demo.component';
import { HomeComponent } from './home/home.component';
import {A11yModule} from '@angular/cdk/a11y';
import { ListKeyDemoComponent } from './list-key-demo/list-key-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SimpleModalComponent,
    FocusDemoComponent,
    HomeComponent,
    ListKeyDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
