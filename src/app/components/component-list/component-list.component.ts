import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-component-list',
  standalone: false,
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss'
})
export class ComponentListComponent implements OnInit {

  pokemonList: any[] = [];
  isLoading = true;
  viewMode: 'grid' | 'list' = 'grid'; // Vista predeterminada

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

  changeView(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }
}
