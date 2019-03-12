import { Component, OnInit } from '@angular/core';
// import {BsModalRef} from 'ngx-bootstrap/modal';
import {MoviesService} from '../services/movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: any;

  constructor(
              private movieService: MoviesService,
              private  router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;
        console.log(data);
      });
    });

  }

}
