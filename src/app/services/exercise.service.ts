import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleGroup: string;
  difficulty: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'http://localhost:5000/api/exercise'; // Update if needed

  constructor(private http: HttpClient) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl);
  }
}
