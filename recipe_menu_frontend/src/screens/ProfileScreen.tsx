import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors, Typography } from '../theme/colors';

/**
 * Placeholder profile screen for bottom tab navigation.
 */
const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Manage your preferences and settings.</Text>
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

export default ProfileScreen;
