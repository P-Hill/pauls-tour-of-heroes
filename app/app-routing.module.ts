// Library components
import { NgModule }					from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';

// Our components 
import { DashboardComponent }		from './dashboard.component';
import { HeroesComponent }					from './heroes.component';
import { HeroDetailComponent }		from './hero-detail.component';

// the table of routes and which components to invoke.
const routes: Routes = [
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
		},
		{
			/* whatever ends up after the "detail/" will be available as a param called id
				accessed as this.route.params['id'], see its use in hero-detail.component.ts (HeroDetailComponent.ngOnInit )
				see https://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html
			*/
			path: 'detail/:id',
			component: HeroDetailComponent
		}
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
