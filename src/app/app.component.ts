import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Question1Component } from './components/question-1/question-1.component';
import { Question2Component } from './components/question-2/question-2.component';
import { Question3Component } from './components/question-3/question-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Question1Component,
    Question2Component,
    Question3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assesment-test';
}
