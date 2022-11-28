import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { AddComponent } from './profile-crud/add/add.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SucculentComponent } from './succulent/succulent.component';
import { UpdateProfileComponent } from './profile-crud/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SeeAllComponent,
    AddComponent,
    SucculentComponent,
    UpdateProfileComponent,
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
