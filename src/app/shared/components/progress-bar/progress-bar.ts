import { Component, Input } from '@angular/core';

@Component({
  selector:    'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls:   ['./progress-bar.css'],
  standalone:  false
})
export class ProgressBar {
  @Input() value:  number = 0;   // 0-100
  @Input() label:  string = '';
  @Input() color:  string = 'var(--primary)';
}