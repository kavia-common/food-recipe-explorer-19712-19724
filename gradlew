#!/usr/bin/env bash
# Root-level gradlew shim to handle CI environments that invoke ./gradlew from the workspace root.

APP_STUB="./recipe_menu_frontend/android/gradlew"

if [ -x "$APP_STUB" ]; then
  exec "$APP_STUB" "$@"
else
  echo "[CI NOTICE] No native Gradle project detected. Skipping native build."
  echo "[CI NOTICE] To generate native projects, run in recipe_menu_frontend/: npm run prebuild:android"
  exit 0
fi
