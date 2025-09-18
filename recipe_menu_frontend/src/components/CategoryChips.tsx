import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../theme/colors';

// PUBLIC_INTERFACE
export type CategoryChipsProps = {
  /** List of category names */
  categories: string[];
  /** Currently selected category or 'All' */
  selected: string;
  /** Callback when a category is selected */
  onSelect: (category: string) => void;
};

/**
 * Horizontal list of rounded category chips with active highlight.
 */
export const CategoryChips: React.FC<CategoryChipsProps> = ({ categories, selected, onSelect }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <Chip label="All" active={selected === 'All'} onPress={() => onSelect('All')} />
      {categories.map((cat) => (
        <Chip key={cat} label={cat} active={selected === cat} onPress={() => onSelect(cat)} />
      ))}
    </ScrollView>
  );
};

const Chip: React.FC<{ label: string; active?: boolean; onPress: () => void }> = ({
  label,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.chip, active && styles.chipActive]}
    >
      <View style={styles.pill}>
        <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.lg,
    gap: 8,
  },
  chip: {
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: Colors.surface,
  },
  chipActive: {
    borderColor: Colors.primary,
    backgroundColor: '#2563EB14',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipText: {
    ...Typography.body,
    color: Colors.textMuted,
    fontWeight: '600',
  },
  chipTextActive: {
    color: Colors.primary,
  },
});
