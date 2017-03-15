import { NgModule }      from '@angular/core'; // Just for the basics.  Note, no file ext. on any of these.
import { BrowserModule } from '@angular/platform-browser'; // to draw on a browser (Doh!)
import { FormsModule }   from '@angular/forms'; // for two-way binding, to use [(ngModel)] syntax. 

// to define the primary components and all the other components
import { AppComponent }  		from './app.component'; 
import { DashboardComponent } 	from './dashboard.component';
import { HeroDetailComponent } 	from './hero-detail.component'; 
import { HeroesComponent } 		from './heroes.component';
import { HeroService } 			from './hero.service';
import { AppRoutingModule }		from './app-routing.module';

@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [ 
		AppComponent,				// the one top-level component of this app imported somewhere above.
		DashboardComponent,
		HeroDetailComponent,		// a detail component	
		HeroesComponent
	],
	providers: [ HeroService ],				  
	bootstrap: [ AppComponent ]		// the Top-level component to start with.
})

export class AppModule { }
