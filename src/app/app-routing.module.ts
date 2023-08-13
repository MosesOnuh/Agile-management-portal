import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './pages/community/community.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "", redirectTo: '/login', pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "community", component: CommunityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
