import { NgModule }      from '@angular/core'; // Just for the basics.  Note, no file ext. on any of these.
import { BrowserModule } from '@angular/platform-browser'; // to draw on a browser (Doh!)
import { FormsModule }   from '@angular/forms'; // for two-way binding, to use [(ngModel)] syntax. 
import { RouterModule }  from '@angular/router';  // to build a router in app.component.

// to define the primary components and all the other components
import { AppComponent }  		from './app.component'; 
import { HeroDetailComponent } 	from './hero-detail.component'; 
import { HeroesComponent } 		from './heroes.component';
import { HeroService } 			from './hero.service';
import { DashboardComponent } 	from './dashboard.component';



@NgModule({
	imports: [ 
			BrowserModule,
			FormsModule,
			RouterModule.forRoot([
				{
					path: '',
					redirectTo: '/dashboard',
					pathMatch: 'full'
				},
				{
				  path: 'dashboard',
				  component: DashboardComponent
				},
				{
					path: 'heroes',
					component: HeroesComponent
				}
			]) 	
		],
	declarations: [ 
			AppComponent,				// the one component of this app imported somewhere above.
			DashboardComponent,
			HeroDetailComponent,		// a detail component	
			HeroesComponent
		],
	providers: [
		HeroService
	],				  
	bootstrap:    [ AppComponent 	]			// the Top-level component to start with.
})

export class AppModule { }
