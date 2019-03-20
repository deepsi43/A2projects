import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule,MatToolbarModule,MatDialogModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlayerdashboardComponent } from './playerdashboard/playerdashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  //{path:'',component: PlayerdashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'',component: PlayerdashboardComponent},
  {path:'signup', component: SignupComponent}
  //{path:'dash', component: PlayerdashboardComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerdashboardComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
