import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-component-list',
  standalone: false,
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss',
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.pokemon-card, .row', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate(
              '500ms ease-out',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ComponentListComponent implements OnInit {

  pokemonList: any[] = [];
  isLoading = true;
  viewMode: 'card' | 'table' = 'card'; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    this.pokemonService.getPokemonList().subscribe((response: any) => {
      this.pokemonList = response.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
      this.isLoading = false;
    });
  }

  changeView(mode: 'card' | 'table'): void {
    this.viewMode = mode;
  }
}
