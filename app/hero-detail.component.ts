import { Component, Input } from '@angular/core'; // a couple of classes
import { Hero } from './hero';  // our DTO

// This is really an annotation on the HeroDetailComponent, ala Java annotations, aka with @
@Component({
	selector: 'my-hero-detail',		// our tag name
	// the HTML which makes this component
	// note [(ngModel)] syntax for two 
	template: `
	<div *ngIf="hero">
      <h2>{{hero.name}} details...</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
	</div>
  `
})

export class HeroDetailComponent {
	@Input()	// coordinate with the framework that hero is input from the template.
	hero: Hero;  // our DTO imported above.
}