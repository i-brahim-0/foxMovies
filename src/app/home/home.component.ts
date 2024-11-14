import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  baseImgUrl = 'https://image.tmdb.org/t/p/original';
  bgHero = '';
  constructor(private _MoviesService: MoviesService) {
    this.getTrendingMovies();
    console.log(this.bgHero);
  }
  ngOnInit(): void {}

  getTrendingMovies() {
    this._MoviesService.trendingMovies('movie/day?').subscribe((response) => {
      this.trendingMovies = response.results;
      this.bgHeroSecUrl();
      console.log(response.results);
    });
  }

  bgHeroSecUrl() {
    let i = 1;
    this.bgHero =
      `url(` +
      this.baseImgUrl +
      (this.trendingMovies[i].poster_path || '') +
      `)`;
    // console.log(this.bgHero);
  }
}
