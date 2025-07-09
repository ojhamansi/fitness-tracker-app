import { Component, OnInit } from '@angular/core';
import { NutritionService, Nutrition } from '../../services/nutrition.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nutrition-tracking',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './nutrition-tracking.component.html',
  styleUrl: './nutrition-tracking.component.scss'
})
export class NutritionTrackingComponent implements OnInit {
  nutrition: Nutrition | null = null;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    // Example: fetch nutrition for user with id 1
    this.nutritionService.getNutrition(1).subscribe(n => this.nutrition = n);
  }

  // Add methods for add, update, delete as needed
}
