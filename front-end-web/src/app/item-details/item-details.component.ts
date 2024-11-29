import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../api/movie.service';

@Component({
  selector: 'app-item-details',
  standalone: false,
  
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {
  details: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe((response) => {
        this.details = response;
      });
    }
  }

  addToFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(this.details);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Adicionado aos favoritos!');
    this.router.navigate(['/seach']);
  }
}