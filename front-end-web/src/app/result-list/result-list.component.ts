import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-list',
  standalone: false,
  
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent {
  @Input() results: any[] = [];

  constructor(private router: Router) {}

  viewDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
}
