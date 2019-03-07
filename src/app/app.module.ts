import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule,MatToolbarModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlayerdashboardComponent } from './playerdashboard/playerdashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
  
]


@NgModule({
  declarations: [
    AppComponent,
    PlayerdashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
