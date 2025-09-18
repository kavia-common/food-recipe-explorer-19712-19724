import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../theme/colors';
import type { Recipe } from '../data/recipes';

// PUBLIC_INTERFACE
export type RecipeCardProps = {
  /** Recipe object to render */
  recipe: Recipe;
  /** Callback when user taps the card */
  onPress: (recipe: Recipe) => void;
};

/**
 * Compact recipe card with rounded image, subtle shadow, and key metadata.
 */
export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(recipe)}
      activeOpacity={0.9}
      style={styles.card}
    >
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.title}>
          {recipe.title}
        </Text>
        <View style={styles.metaRow}>
          <MetaPill label={`${recipe.time} min`} />
          <MetaPill label={`${Math.round(recipe.calories)} cal`} />
          <MetaPill label={`★ ${recipe.rating.toFixed(1)}`} accent />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MetaPill: React.FC<{ label: string; accent?: boolean }> = ({ label, accent }) => (
  <View
    style={[
      styles.pill,
      { backgroundColor: accent ? '#F59E0B22' : '#11182710', borderColor: accent ? Colors.secondary : 'transparent' },
    ]}
  >
    <Text style={[styles.pillText, { color: accent ? Colors.secondary : Colors.text }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 14,
    elevation: 3,
    marginBottom: Spacing.lg,
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: Spacing.md,
  },
  title: {
    ...Typography.heading,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
