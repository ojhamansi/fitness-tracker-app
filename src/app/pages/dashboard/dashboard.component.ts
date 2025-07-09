import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  bmi: number | null = null;
  calories: number | null = null;
  suggestedPlan: string = '';

  constructor(private gemini: GeminiService, private auth: AuthService) {}

  ngOnInit() {
    // Example: fetch user info from backend or JWT, then call GeminiService
    // For demo, use static values
    const weight = 70, height = 175, age = 30, activity = 'moderate', gender = 'male', muscle = 'Chest';
    this.gemini.getSuggestedPlan(weight, height, age, activity, muscle, gender).subscribe(plan => {
      this.suggestedPlan = plan.plan;
    });
    // BMI and calories can be fetched similarly or calculated client-side
    this.bmi = +(weight / ((height / 100) ** 2)).toFixed(2);
    this.calories = 2500; // Replace with real calculation or API call
  }
}
