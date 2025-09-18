import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Recipe } from '../data/recipes';

export type RootStackParamList = {
  Tabs: undefined;
  RecipeDetail: { recipe: Recipe };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Tabs'>;

export type RecipeDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'RecipeDetail'>;
