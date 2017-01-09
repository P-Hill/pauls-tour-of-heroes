import { NgModule }      from '@angular/core'; // Just for the basics.  Note, no file ext. on any of these.
import { BrowserModule } from '@angular/platform-browser'; // to draw on a browser (Doh!)
import { FormsModule }   from '@angular/forms'; // for two-way binding, to use [(ngModel)] syntax. 

import {HeroDetailComponent} from './hero-detail.component'; 

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
				  FormsModule 	],
  declarations: [ AppComponent,				// the one component of this app imported somewhere above.
				  HeroDetailComponent		// a detail component
				  ],  
  bootstrap:    [ AppComponent 	]			// the Top-level component to start with.
})

export class AppModule { }
