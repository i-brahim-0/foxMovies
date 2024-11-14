import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  basePath = 'https://api.themoviedb.org/3/';
  apiKey = 'api_key=e0d6ea97909432f7ff4408e21d535b86';
  accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ2ZWE5NzkwOTQzMmY3ZmY0NDA4ZTIxZDUzNWI4NiIsIm5iZiI6MTczMTU4ODk3My45NDYyMTg3LCJzdWIiOiI2NzJjNTExY2Q5OGJiYzM5NzdhZDEzZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qsmkJKEeYcsj4IPJqcgC9uM97B61kW98giKhocS7pSU';

  constructor(private _HttpClient: HttpClient) {}
  ngOnInit(): void {}
  trendingMovies(dataType: string): Observable<any> {
    return this._HttpClient.get(
      `${this.basePath}trending/${dataType}${this.apiKey}`
    );
  }
}
