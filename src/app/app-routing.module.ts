import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './components/component-list/component-list.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';


const routes: Routes = [
  { path: '', component: ComponentListComponent }, 
  { path: 'detail', component: ComponentDetailComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
