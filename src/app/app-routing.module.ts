import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { page1Component } from 'src/pages/page1/page1';
import { page2Component } from 'src/pages/page2/page2';

const routes: Routes = [
  {
    path: 'page1',
    component: page1Component
  },
  {
    path: 'page2',
    component: page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
