import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() pokemonList: any[] = [];

  constructor(private router: Router) {}

  goToDetails(pokemon: any): void {
    this.router.navigate(['/detail'], { queryParams: { id: pokemon.id } });
  }
}
