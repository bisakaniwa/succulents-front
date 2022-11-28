import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { AddComponent } from './add/add.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SucculentComponent } from './succulent/succulent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SeeAllComponent,
    AddComponent,
    SucculentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
