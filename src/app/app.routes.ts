import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthGuard] },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'workout-plan', loadComponent: () => import('./pages/workout-plan/workout-plan.component').then(m => m.WorkoutPlanComponent), canActivate: [AuthGuard] },
  { path: 'exercise-library', loadComponent: () => import('./pages/exercise-library/exercise-library.component').then(m => m.ExerciseLibraryComponent), canActivate: [AuthGuard] },
  { path: 'nutrition-tracking', loadComponent: () => import('./pages/nutrition-tracking/nutrition-tracking.component').then(m => m.NutritionTrackingComponent), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard' }
];
