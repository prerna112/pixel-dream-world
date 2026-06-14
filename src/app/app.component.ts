import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  goals = [
  {
    name: 'Germany Masters',
    targetAmount: 2500000,
    savedAmount: 500000,
    icon: '🏰'
  },
  {
    name: 'Dream House',
    targetAmount: 10000000,
    savedAmount: 0,
    icon: '🏡'
  },
  {
    name: 'Europe Trip',
    targetAmount: 300000,
    savedAmount: 20000,
    icon: '✈️'
  }
];

getProgress(goal: any): number {
  return Math.round(
    (goal.savedAmount / goal.targetAmount) * 100
  );
}
}