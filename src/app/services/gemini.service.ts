import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'http://localhost:5000/api/plan/suggested'; // Update if needed

  constructor(private http: HttpClient) { }

  getSuggestedPlan(weight: number, height: number, age: number, activityLevel: string, targetMuscleGroup: string, gender: string): Observable<{ plan: string }> {
    return this.http.get<{ plan: string }>(`${this.apiUrl}?weightKg=${weight}&heightCm=${height}&age=${age}&activityLevel=${activityLevel}&targetMuscleGroup=${targetMuscleGroup}&gender=${gender}`);
  }
}
