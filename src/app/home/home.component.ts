import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../services/movies.service';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {MoviesComponent} from '../movies/movies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  searchMovie: string;

  modalRef: BsModalRef;


  constructor(public moviesService: MoviesService,
              private modalService: BsModalService) {

    // get upcoming movies
    this.moviesService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });

    // get popular movies
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });

  }

  // get search results of movies
  searchMovies() {
    this.moviesService.searchMovie(this.searchMovie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });
  }

  openModal(movieId){
    this.modalRef = this.modalService.show(MoviesComponent);

  }
  ngOnInit() {
  }

}
