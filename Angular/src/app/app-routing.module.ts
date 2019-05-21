import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DasboardComponent } from './dasboard/dasboard.component';

const routes: Routes = [{
    path : '',redirectTo:'home',pathMatch:'full'
},

{
	path : 'home',component : HomeComponent
},
{
	path : 'registration',component : RegistrationComponent
}, 
{
	path : 'login',component : LoginComponent
},
{
	path : 'dashboard',component : DasboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
