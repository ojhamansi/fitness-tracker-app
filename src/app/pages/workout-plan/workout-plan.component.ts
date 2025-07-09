import { Component, OnInit } from '@angular/core';
import { WorkoutService, WorkoutPlan } from '../../services/workout.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-plan',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  templateUrl: './workout-plan.component.html',
  styleUrl: './workout-plan.component.scss'
})
export class WorkoutPlanComponent implements OnInit {
  plans: WorkoutPlan[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workoutService.getPlans().subscribe(plans => this.plans = plans);
  }

  // Add methods for add, update, delete as needed
}
