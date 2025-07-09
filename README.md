# Fitness Tracker Angular Frontend

This is the Angular 17 frontend for the Fitness Tracker application. It connects to the .NET Core Web API backend and provides a modern, responsive UI for fitness tracking.

## Features
- User Registration/Login (JWT authentication)
- Dashboard (BMI, Calorie Intake, Suggested Plans)
- Workout Plan Management (View/Add/Edit/Delete)
- Exercise Library (Browse/Search)
- Nutrition Tracking (Daily Intake)
- Charts for calorie and BMI trends (ngx-charts/Chart.js)
- Angular Material UI and mobile-first responsive design

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   ng serve
   ```
3. The app will be available at `http://localhost:4200`

## API Configuration
- Update API URLs in the Angular services if your backend runs on a different port or host.

## Project Structure
- `/src/app/pages` - Main feature pages
- `/src/app/services` - API and business logic services
- `/src/app/core` - Core UI components (NavBar, etc.)
- `/src/app/shared` - Shared UI components (charts, cards, etc.)

## License
MIT
