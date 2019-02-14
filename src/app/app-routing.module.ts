import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { page1Component } from 'src/pages/page1/page1';

const routes: Routes = [
  {
    path: 'page1',
    component: page1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
