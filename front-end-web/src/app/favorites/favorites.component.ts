import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: false,
  
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
  }

  removeFromFavorites(id: string): void {
    this.favorites = this.favorites.filter(movie => movie.imdbID !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    alert('Filme removido dos favoritos!');
  }
}
