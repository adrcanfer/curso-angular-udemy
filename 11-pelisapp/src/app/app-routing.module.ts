import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'search/:keyword', component: SearchComponent},
  {path:'details/:id/:pag', component: DetailsComponent},
  {path:'details/:id/:pag/:keyword', component: DetailsComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
