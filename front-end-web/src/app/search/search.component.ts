import { Component, Input, Output } from '@angular/core';
import { MovieService } from '../api/movie.service';

@Component({
  selector: 'app-search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';
  results: any[] = [];

  constructor(private movieService: MovieService) {}

  onSearch() {
    if (this.query) {
      this.movieService.searchMovies(this.query).subscribe(
        (response) => {
          this.results = response.Search || [];
          console.error('Erro ao buscar filmes:', this.results);
        },
        (error) => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }
  }
}
