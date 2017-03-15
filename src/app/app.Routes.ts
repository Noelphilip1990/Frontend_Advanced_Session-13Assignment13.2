import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './app.homeComponent';
import { ContactComponent } from './app.contactComponent';
import { AboutComponent } from './app.aboutComponent';

const route:Routes =[
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', component: HomeComponent },
]

export const routing= RouterModule.forRoot(route);