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
MAX_VALUE: any;

  constructor() {
    this.loadFromLocalStorage();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
    this.count = parseInt(localStorage.getItem('count') ?? '0', 10);
    this.percentage = parseFloat(localStorage.getItem('percentage') ?? '0');
    this.calculatePercentage();
  }

  saveToLocalStorage() {
    localStorage.setItem('count', this.count.toString());
    localStorage.setItem('percentage', this.percentage.toString());
  }
}