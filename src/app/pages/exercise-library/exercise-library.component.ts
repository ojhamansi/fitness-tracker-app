import { Component, OnInit } from '@angular/core';
import { ExerciseService, Exercise } from '../../services/exercise.service';

@Component({
  selector: 'app-exercise-library',
  standalone: true,
  imports: [],
  templateUrl: './exercise-library.component.html',
  styleUrl: './exercise-library.component.scss'
})
export class ExerciseLibraryComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exerciseService.getExercises().subscribe(exs => this.exercises = exs);
  }
}
