import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  standalone: false,
  
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  @Input() pokemonList: any[] = [];
  displayedColumns: string[] = ['image', 'name'];

  constructor(private router: Router) {}

  goToDetails(pokemon: any): void {
    this.router.navigate(['/detail'], { queryParams: { id: pokemon.id } });
  }

  ngOnInit(): void {}
}
