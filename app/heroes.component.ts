import { Component, OnInit } 	from '@angular/core';
import { Router }				from '@angular/router';

import { HeroService } from './hero.service';

import { Hero } from './hero'; // just like Java, we need to import ever class we use.


// This was the app component, but now is just one of several components
// the @Component is a 'decorator', like a Java annotation.
// All decorators need to have parens, so a function is called with declarations which will define decorations
// ?? I don't understand how @Component as a function call gets connected with class which follows unless this
// really is a annotation construct in the language.

@Component({
  moduleId: module.id,
  // the selector matches/becomes the invented html tag in index.html 
  // because a CSS selector for a tag called <new-tag> is 'new-tag'
  // see http://www.w3schools.com/cssref/css_selectors.asp
  selector: 'my-heroes',  
  // the template is the code to put in the tag mentioned in the selector. 
  // Multiline Marked by back ticks  (` `) or grave accents.
  // It's the HTML for this component, but it will be filtered by the Angular2 processor. 
	templateUrl: './heroes.component.html',
	styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit { 
	title = 'PAH Heroes';
	// current set of heros
	heroes: Hero[];
	selectedHero: Hero;
	
	// a router and a heroService is declared as injected in the c'tor
	constructor(
		private router: Router,
		private heroService: HeroService) { }
	
	// the callback invoke to get the list
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	// call the getHeroes on startup
	ngOnInit(): void {
		this.getHeroes();
	}
	
	// method called from template.
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id])
	}
}

