import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTV: any[] = [];
  trendingPeople: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  bgHero = '';
  isBtnMovieActive: boolean = true;
  isBtnTvActive: boolean = true;
  isBtnPeopleActive: boolean = true;

  customOptions: OwlOptions = {
    // autoWidth: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
    // nav: true,
  };

  constructor(private _MoviesService: MoviesService) {
    this.getTrendingMovies('day');
    this.getTrendingTv('day');
    this.getTrendingPeople('day');
  }
  ngOnInit(): void {}

  toggelMovieBtns(isBtnClicked: boolean): void {
    this.isBtnMovieActive = isBtnClicked;
  }
  toggelTvBtns(isBtnClicked: boolean): void {
    this.isBtnTvActive = isBtnClicked;
  }
  toggelPeopleBtns(isBtnClicked: boolean): void {
    this.isBtnPeopleActive = isBtnClicked;
  }

  getTrendingMovies(timeFrame: string) {
    this._MoviesService
      .trendingMovies('movie', timeFrame)
      .subscribe((response) => {
        this.trendingMovies = response.results;
        this.bgHeroSecUrl();
      });
  }
  getTrendingTv(timeFrame: string) {
    this._MoviesService
      .trendingMovies('tv', timeFrame)
      .subscribe((response) => {
        this.trendingTV = response.results;
      });
  }
  getTrendingPeople(timeFrame: string) {
    this._MoviesService
      .trendingMovies('person', timeFrame)
      .subscribe((response) => {
        this.trendingPeople = response.results;
      });
  }

  bgHeroSecUrl() {
    let i = 1;
    this.bgHero =
      `url(` +
      this.imgPrefix +
      (this.trendingMovies[i].poster_path || '') +
      `)`;
  }
}
