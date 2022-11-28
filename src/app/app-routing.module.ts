import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddComponent } from './profile-crud/add/add.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { SucculentComponent } from './succulent/succulent.component';
import { UpdateProfileComponent } from './profile-crud/update-profile/update-profile.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'see-all', component: SeeAllComponent },
  { path: 'add', component: AddComponent },
  { path: 'succulent/:id', component: SucculentComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
