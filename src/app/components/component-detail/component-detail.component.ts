import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-component-detail',
  standalone: false,

  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss'
})
export class ComponentDetailComponent implements OnInit {
  pokemonDetails: any;
  showAllDetails: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.queryParams['id'];
    if (id) {
      this.pokemonService.getPokemonDetails(id).subscribe({
        next: (details) => {
          this.pokemonDetails = details;
        },
        error: (error) => {
          console.error('Error al cargar detalles:', error);
          this.errorMessage = 'No se pudo cargar los detalles del Pokémon.';
        }
      });
    } else {
      this.errorMessage = 'ID inválido. No se pudo cargar el Pokémon.';
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  toggleDetails(): void {
    this.showAllDetails = !this.showAllDetails;
  }
}