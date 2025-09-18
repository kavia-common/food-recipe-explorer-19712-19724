import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors, Typography } from '../theme/colors';

/**
 * Placeholder favorites screen for bottom tab navigation.
 */
const FavoritesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>Save recipes you love to access them quickly.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    ...Typography.title,
    fontSize: 22,
  },
  subtitle: {
    ...Typography.subtitle,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default FavoritesScreen;
