import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/Login/Login';
import { page1Component } from 'src/pages/page1/page1';
import { page2Component } from 'src/pages/page2/page2';


const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'Login',component: LoginComponent},
  {path: 'page1',component: page1Component, children: [{path: 'page2',component: page2Component,outlet: 'childoutlet'}]},
  {path: 'page2',component: page2Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
