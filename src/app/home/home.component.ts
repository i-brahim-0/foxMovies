import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  bgHero = '';
  isBtnTodayActive: boolean = true;

  constructor(private _MoviesService: MoviesService) {
    this.getTrendingMovies();
  }
  ngOnInit(): void {}

  toggelBtns(isBtnClicked: boolean): void {
    this.isBtnTodayActive = isBtnClicked;
  }

  getTrendingMovies() {
    this._MoviesService.trendingMovies('movie/day?').subscribe((response) => {
      this.trendingMovies = response.results;
      this.bgHeroSecUrl();
      console.log(this.trendingMovies);
    });
  }

  bgHeroSecUrl() {
    let i = 1;
    this.bgHero =
      `url(` +
      this.imgPrefix +
      (this.trendingMovies[i].poster_path || '') +
      `)`;
    // console.log(this.bgHero);
  }
}
