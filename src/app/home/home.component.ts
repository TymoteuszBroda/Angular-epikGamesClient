import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GamesServiceService } from '../games-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  games: any[] = [];

constructor(private gamesService: GamesServiceService) {}

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      (data) => {
        this.games = data
      },
      error => {
        console.error("error fetching games", error.error);
      }
    );
  }
}
