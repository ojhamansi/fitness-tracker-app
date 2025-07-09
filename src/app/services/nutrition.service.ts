import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Nutrition {
  id?: number;
  userId?: number;
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = 'http://localhost:5000/api/nutrition'; // Update if needed

  constructor(private http: HttpClient) { }

  getNutrition(id: number): Observable<Nutrition> {
    return this.http.get<Nutrition>(`${this.apiUrl}/${id}`);
  }

  addNutrition(nutrition: Nutrition): Observable<Nutrition> {
    return this.http.post<Nutrition>(this.apiUrl, nutrition);
  }

  updateNutrition(nutrition: Nutrition): Observable<Nutrition> {
    return this.http.put<Nutrition>(`${this.apiUrl}/${nutrition.id}`, nutrition);
  }

  deleteNutrition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
