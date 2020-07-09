import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GenerateDataComponent } from './generate-data/generate-data.component';
import { ConnectComponent } from './generate-data/connect/connect.component';


@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    GenerateDataComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
