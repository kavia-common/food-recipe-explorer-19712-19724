import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../theme/colors';
import type { RecipeDetailScreenProps } from '../types/navigation';

/**
 * Details screen for a selected recipe including image, metadata, ingredients, and instructions.
 */
const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerImageWrap}>
          <Image source={{ uri: recipe.image }} style={styles.headerImage} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.8}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.category}>{recipe.category}</Text>

          <View style={styles.metaRow}>
            <Meta label={`${recipe.time} min`} />
            <Meta label={`${Math.round(recipe.calories)} cal`} />
            <Meta label={`★ ${recipe.rating.toFixed(1)}`} accent />
          </View>

          {recipe.description ? (
            <Text style={styles.description}>{recipe.description}</Text>
          ) : null}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            {recipe.ingredients.map((it, idx) => (
              <View style={styles.bulletRow} key={`${it}-${idx}`}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>{it}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            {recipe.instructions.map((st, idx) => (
              <View style={styles.stepRow} key={`${st}-${idx}`}>
                <View style={styles.stepIndex}>
                  <Text style={styles.stepIndexText}>{idx + 1}</Text>
                </View>
                <Text style={styles.stepText}>{st}</Text>
              </View>
            ))}
          </View>

          <View style={{ height: 24 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Meta: React.FC<{ label: string; accent?: boolean }> = ({ label, accent }) => (
  <View style={[styles.meta, accent && { backgroundColor: '#F59E0B22', borderColor: Colors.secondary }]}>
    <Text style={[styles.metaText, accent && { color: Colors.secondary }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  headerImageWrap: {
    position: 'relative',
    backgroundColor: Colors.surface,
  },
  headerImage: {
    width: '100%',
    height: 280,
  },
  backBtn: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#FFFFFFEE',
    borderRadius: Radius.full,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  backText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  title: {
    ...Typography.title,
    fontSize: 24,
  },
  category: {
    ...Typography.caption,
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  meta: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: Radius.full,
    backgroundColor: '#11182710',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  metaText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text,
  },
  description: {
    ...Typography.body,
    marginVertical: 8,
  },
  section: {
    marginTop: 16,
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sectionTitle: {
    ...Typography.heading,
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    marginRight: 8,
  },
  bulletText: {
    ...Typography.body,
    flex: 1,
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  stepIndex: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2563EB14',
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  stepIndexText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  stepText: {
    ...Typography.body,
    flex: 1,
  },
});

export default RecipeDetailScreen;
