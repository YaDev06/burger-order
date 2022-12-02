import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  // {path:'order',component:},
  // {path:'cart',component:},
  // {path:'contact',component:},
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', redirectTo:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
