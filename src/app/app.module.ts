import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { X1LargeComponent } from './x1-large/x1-large.component';
import { HeaderComponent } from './header/header.component';
import { ForEnterpriseComponent } from './for-enterprise/for-enterprise.component';
import { ApiAccessComponent } from './api-access/api-access.component';

@NgModule({
  declarations: [
    AppComponent,
    X1LargeComponent,
    HeaderComponent,
    ForEnterpriseComponent,
    ApiAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
