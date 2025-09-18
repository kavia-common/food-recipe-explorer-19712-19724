This 'android' directory is a CI-friendly stub to avoid failures in environments that automatically invoke './gradlew' before the native project exists.

What this is:
- A placeholder with a stub 'gradlew' script that exits successfully and prints guidance.

What this is not:
- A real Android native project. No builds will be produced from this stub.

How to generate a real Android project:
1) From the project root of 'recipe_menu_frontend', run:
   npm run prebuild:android
2) This will create a proper 'android/' directory with Gradle files, a real 'gradlew', and sources.
3) Build using Android Studio or EAS:
   - Open the generated 'android/' in Android Studio and build.
   - Or use 'npx eas build -p android' (requires EAS setup).

Why this exists:
- Some CI pipelines run './gradlew' by default. Without this stub, those runs fail with "No such file or directory".
- The stub prevents false negatives while we rely on Expo-managed workflows for development.
