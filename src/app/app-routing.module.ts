import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FocusDemoComponent} from './focus-demo/focus-demo.component';
import { HomeComponent } from './home/home.component';
import {ListKeyDemoComponent} from './list-key-demo/list-key-demo.component';

const routes: Routes = [
  { path: 'focusDemo', component: FocusDemoComponent },
  { path: 'listKeyDemo', component: ListKeyDemoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
