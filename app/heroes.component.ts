import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero'; // just like Java, we need to import ever class we use.


// This was the app component, but now is just one of several components
// the @Component is a 'decorator', like a Java annotation.
// All decorators need to have parens, so a function is called with declarations which will define decorations
// ?? I don't understand how @Component as a function call gets connected with class which follows unless this
// really is a annotation construct in the language.

@Component({
  // the selector matches/becomes the invented html tag in index.html 
  // because a CSS selector for a tag called <new-tag> is 'new-tag'
  // see http://www.w3schools.com/cssref/css_selectors.asp
  selector: 'my-heroes',  
  // the template is the code to put in the tag mentioned in the selector. 
  // Multiline Marked by back ticks  (` `) or grave accents.
  // It's the HTML for this component, but it also uses a tag imported by the app, 
  template: `
  <h1>{{title}}</h1>
  <h2>List 'o Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
		(click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})
export class HeroesComponent implements OnInit { 
	title = 'PAH Heroes';
	// current set of heros
	heroes: Hero[];
	selectedHero: Hero;
	
	// heroService is declared as injected in the c'tor
	constructor(private heroService: HeroService) { }
	
	// the callback invoke to get the list
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	// call the getHeroes on startup
	ngOnInit(): void {
		this.getHeroes();
	}
	
	// method called from template w/o scoping, because this is a method of the component paired with the template.
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}

