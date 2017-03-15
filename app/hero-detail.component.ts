import { Component, Input, OnInit } from '@angular/core'; // some definitions we'll be using
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location } 				from '@angular/common';

import 'rxjs/add/operator/switchMap'; 	// the add/operator/MyFoo code, by convention, through side effects 
										// adds MyFoo operator (operation?) = 
										// method to some class. rxjs/add/operator/switchMap adds ActivateRoute.switchMap 

import { Hero } 					from './hero';  		// our DTO
import { HeroService }				from './hero.service';	

// This is really an annotation on the HeroDetailComponent, ala Java annotations, aka with @
@Component({
	moduleId: module.id,			// files (e.g. the html) are loaded relative to the path in moduleId.
	selector: 'my-hero-detail',		// our html tag name
	templateUrl: './hero-detail.component.html',
	styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {} 
	
	ngOnInit(): void {
		this.route.params
			// given a params array/hash (from where?) use the int value of params['id'] to get a hero.
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);		
	}
	
	goBack(): void {
		this.location.back();
	}
	
	@Input()	// coordinate with the framework that hero is input from the template.
	hero: Hero;  // our DTO imported above.
}