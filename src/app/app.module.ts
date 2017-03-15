import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.homeComponent';
import { ContactComponent } from './app.contactComponent';
import { AboutComponent } from './app.aboutComponent';
//Pipe Stuff
import { CustomPipe } from './customPipe';
//Routing stuff
import { routing } from './app.Routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        routing
        
    ],
    declarations: [
        AppComponent,
        CustomPipe,
        HomeComponent,
        ContactComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]

})
export class AppModule {
}