import { Component, OnInit } from '@angular/core';
import { ScoreService, Stats } from '../../services/score.service';

@Component({
  selector:    'app-score-pill',
  templateUrl: './score-pill.html',
  styleUrls:   ['./score-pill.css'],
  standalone:  false
})
export class ScorePill implements OnInit {

  stats: Stats = { score: 0, streak: 0, bestStreak: 0, totalRight: 0, totalWrong: 0 };

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.stats$.subscribe(s => this.stats = s);
  }
}