import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Colors, Spacing, Typography } from '../theme/colors';
import { SearchBar } from '../components/SearchBar';
import { CategoryChips } from '../components/CategoryChips';
import { RecipeCard } from '../components/RecipeCard';
import { CATEGORIES, RECIPES, type Recipe } from '../data/recipes';
import type { HomeScreenProps } from '../types/navigation';

/**
 * Home screen shows search, category chips, and the recipes list.
 */
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filteredData = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RECIPES.filter((r) => {
      const matchesQuery =
        q.length === 0 ||
        r.title.toLowerCase().includes(q) ||
        r.ingredients.join(' ').toLowerCase().includes(q);
      const matchesCategory = category === 'All' || r.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const renderItem = ({ item }: { item: Recipe }) => (
    <RecipeCard
      recipe={item}
      onPress={(recipe) => navigation.navigate('RecipeDetail', { recipe })}
    />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.headerSection}>
            <Text style={styles.title}>Discover Recipes</Text>
            <Text style={styles.subtitle}>Find your next favorite meal</Text>
            <View style={{ height: 12 }} />
            <SearchBar value={query} onChangeText={setQuery} />
            <View style={{ height: 12 }} />
            <CategoryChips
              categories={CATEGORIES}
              selected={category}
              onSelect={setCategory}
            />
            <View style={{ height: 14 }} />
          </View>
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: Spacing.lg,
    paddingBottom: 120,
  },
  headerSection: {
    paddingBottom: Spacing.md,
  },
  title: {
    ...Typography.title,
    fontSize: 26,
  },
  subtitle: {
    ...Typography.subtitle,
    marginTop: 4,
  },
});

export default HomeScreen;
