import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors, Radius } from '../theme/colors';

// PUBLIC_INTERFACE
export type SearchBarProps = {
  /** Current value of the search input */
  value: string;
  /** Callback when the search text changes */
  onChangeText: (text: string) => void;
  /** Placeholder text to show in input */
  placeholder?: string;
};

/**
 * A modern rounded search bar styled with the Ocean Professional theme.
 */
export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder ?? 'Search recipes...'}
        placeholderTextColor={Colors.textMuted}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 2,
  },
  input: {
    color: Colors.text,
    fontSize: 16,
  },
});
