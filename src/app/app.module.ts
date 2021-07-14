import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SuperbarComponent } from './components/superbar/superbar.component';
import { DefensivosComponent } from './pages/defensivos/defensivos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuperbarComponent,
    DefensivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
