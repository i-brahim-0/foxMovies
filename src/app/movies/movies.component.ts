import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  nowPlaying: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService: MoviesService) {
    this.getNowPlayingMovies('now_playing');
  }
  ngOnInit(): void {}

  getNowPlayingMovies(timeFrame: string) {
    this._MoviesService
      .nowPlayingMovies('movie', timeFrame)
      .subscribe((response) => {
        this.nowPlaying = response.results;
        console.log(this.nowPlaying);
      });
  }
}
