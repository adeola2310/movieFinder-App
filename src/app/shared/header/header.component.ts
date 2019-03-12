import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public moviesServive: MoviesService) {

  }

  ngOnInit() {
  }

}
