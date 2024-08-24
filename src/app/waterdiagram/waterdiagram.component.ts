import { Component, OnInit } from '@angular/core';

const MAX_VALUE = 1000;
const INC_VALUE = 100;

@Component({
  selector: 'app-waterdiagram',
  standalone: true,
  imports: [],
  templateUrl: './waterdiagram.component.html',
  styleUrls: ['./waterdiagram.component.css']
})
export class WaterdiagramComponent implements OnInit {
  count: number = 0;
  percentage: number = 0;

  constructor() {
    this.loadFromLocalStorage();
  }

  increment() {
    if (this.count < MAX_VALUE) {
      this.count += INC_VALUE;
      this.calculatePercentage();
      this.saveToLocalStorage();
    }
  }

  decrement() {
    if (this.count > 0) {
      this.count -= INC_VALUE;
      this.calculatePercentage();
      this.saveToLocalStorage();
    }
  }

  calculatePercentage() {
    this.percentage = Math.round((this.count / MAX_VALUE) * 100 * 100) / 100;
  }

  loadFromLocalStorage() {
    const storedCount = localStorage.getItem('count');
    const storedPercentage = localStorage.getItem('percentage');

    if (storedCount) {
      this.count = parseInt(storedCount, 10);
    } else {
      this.count = 0;
    }

    if (storedPercentage) {
      this.percentage = parseFloat(storedPercentage);
    } else {
      this.percentage = 0;
    }

    this.calculatePercentage();
  }

  saveToLocalStorage() {
    localStorage.setItem('count', this.count.toString());
    localStorage.setItem('percentage', this.percentage.toString());
  }

  ngOnInit(): void {
    // No need to throw an error here
  }
}