import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WorkoutPlan {
  id?: number;
  userId?: number;
  name: string;
  targetMuscleGroup: string;
  exercises: string;
  duration: number;
  suggestedCalories: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private apiUrl = 'http://localhost:5000/api/workoutplan'; // Update if needed

  constructor(private http: HttpClient) { }

  getPlans(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(this.apiUrl);
  }

  addPlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(this.apiUrl, plan);
  }

  updatePlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(`${this.apiUrl}/${plan.id}`, plan);
  }

  deletePlan(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
