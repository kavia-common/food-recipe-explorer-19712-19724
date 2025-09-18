# Recipe Menu Frontend (React Native / Expo)

Modern mobile UI for browsing, searching, and viewing food recipes.

Features:
- Recipes list view with images and metadata
- Top search bar and horizontal category chips
- Recipe detail page with ingredients and instructions
- Bottom tab navigation (Home, Favorites, Profile)
- Ocean Professional theme (blue & amber accents), rounded corners, subtle shadows

Getting Started:
- Install dependencies: npm install
- Start in Expo: npm start

CI Note:
- The `build` script is a no-op to prevent CI from calling Gradle before `expo prebuild`. This avoids ./gradlew not found errors.
- To produce native binaries locally:
  1) npm run prebuild:android
  2) Open android/ in Android Studio and build, or use EAS (recommended).

Tech stack:
- Expo (React Native)
- React Navigation (Bottom Tabs + Native Stack)
- TypeScript

Structure:
- src/
  - navigation/AppNavigator.tsx
  - screens/
  - components/
  - data/
  - theme/

Theme:
- Primary: #2563EB
- Secondary/Accent: #F59E0B
- Background: #F9FAFB
- Surface: #FFFFFF
- Text: #111827
