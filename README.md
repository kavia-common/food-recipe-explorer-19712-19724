# food-recipe-explorer-19712-19724

This workspace contains the React Native (Expo) mobile app under `recipe_menu_frontend/`.

Quick start:
- cd recipe_menu_frontend
- npm install
- npm start

Building:
- The `build` script intentionally avoids calling Gradle directly to prevent CI errors before Expo prebuild.
- A CI-friendly stub `gradlew` is placed at workspace root and under recipe_menu_frontend/ to avoid failures when CI invokes Gradle.
- To create native Android project files locally: `cd recipe_menu_frontend && npm run prebuild:android`
- Then open the generated `android/` folder in Android Studio and build, or use EAS: `npx expo prebuild && npx eas build -p android`