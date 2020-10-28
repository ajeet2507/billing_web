import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'', redirectTo:'Onlinebilling',pathMatch:'full' },
  { path:'Onlinebilling',component:HomeComponent, data: { title: 'Home' } },
  { path:'signup',component:SignupComponent, data: { title: 'Signup' } },
  { path:'login',component:LoginComponent, data: { title: 'Login' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
