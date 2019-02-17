import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainComponent} from './main/main.component';
import {SearchComponent} from './search/search.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'main', component: MainComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
