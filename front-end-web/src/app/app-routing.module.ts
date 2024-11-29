import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'seach', component: SearchComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
