export type Recipe = {
  id: string;
  title: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' | 'Snack' | 'Drinks';
  image: string;
  time: number; // minutes
  calories: number;
  rating: number; // 0-5
  ingredients: string[];
  instructions: string[];
  description?: string;
};

export const CATEGORIES: Array<Recipe['category']> = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Snack',
  'Drinks',
];

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Avocado Toast with Poached Egg',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf2?q=80&w=1640&auto=format&fit=crop',
    time: 10,
    calories: 320,
    rating: 4.6,
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '1 egg',
      'Salt & pepper',
      'Chili flakes (optional)',
      'Lemon juice',
    ],
    instructions: [
      'Toast sourdough until golden.',
      'Mash avocado with salt, pepper, and lemon juice.',
      'Poach egg to desired doneness.',
      'Spread avocado on toast, top with egg.',
      'Finish with chili flakes.',
    ],
    description: 'Crisp sourdough with creamy avocado and a silky poached egg.',
  },
  {
    id: '2',
    title: 'Grilled Chicken Salad',
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1640&auto=format&fit=crop',
    time: 20,
    calories: 450,
    rating: 4.8,
    ingredients: [
      'Chicken breast',
      'Mixed greens',
      'Cherry tomatoes',
      'Cucumber',
      'Olive oil',
      'Lemon vinaigrette',
    ],
    instructions: [
      'Season and grill chicken until cooked.',
      'Slice vegetables and toss with greens.',
      'Top salad with sliced chicken.',
      'Dress with lemon vinaigrette.',
    ],
    description: 'Light and refreshing with protein-packed grilled chicken.',
  },
  {
    id: '3',
    title: 'Creamy Mushroom Pasta',
    category: 'Dinner',
    image: 'https://images.unsplash.com/photo-1476127397216-4f3f8060b05f?q=80&w=1640&auto=format&fit=crop',
    time: 30,
    calories: 650,
    rating: 4.7,
    ingredients: [
      'Pasta of choice',
      'Mushrooms',
      'Garlic',
      'Cream',
      'Parmesan',
      'Parsley',
    ],
    instructions: [
      'Cook pasta al dente.',
      'Sauté mushrooms and garlic.',
      'Add cream and simmer.',
      'Combine pasta, stir in parmesan.',
      'Garnish with parsley.',
    ],
    description: 'Rich, velvety sauce with sautéed mushrooms and parmesan.',
  },
  {
    id: '4',
    title: 'Chocolate Lava Cake',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1640&auto=format&fit=crop',
    time: 25,
    calories: 420,
    rating: 4.9,
    ingredients: [
      'Dark chocolate',
      'Butter',
      'Sugar',
      'Eggs',
      'Flour',
      'Vanilla',
    ],
    instructions: [
      'Melt chocolate and butter.',
      'Whisk in sugar and eggs.',
      'Fold in flour and vanilla.',
      'Bake until edges set, center molten.',
    ],
    description: 'Decadent dessert with a gooey chocolatey center.',
  },
  {
    id: '5',
    title: 'Greek Yogurt Parfait',
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1542444459-db63c6b44b9c?q=80&w=1640&auto=format&fit=crop',
    time: 5,
    calories: 220,
    rating: 4.4,
    ingredients: ['Greek yogurt', 'Granola', 'Mixed berries', 'Honey'],
    instructions: [
      'Layer yogurt, granola, and berries in a glass.',
      'Drizzle honey on top.',
    ],
    description: 'Quick, healthy snack with creamy yogurt and fresh berries.',
  },
  {
    id: '6',
    title: 'Iced Lemon Tea',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1640&auto=format&fit=crop',
    time: 8,
    calories: 60,
    rating: 4.2,
    ingredients: ['Black tea', 'Lemon', 'Sugar', 'Ice'],
    instructions: [
      'Brew tea, cool slightly.',
      'Add lemon juice and sugar to taste.',
      'Serve over ice.',
    ],
    description: 'Zesty, cooling iced tea with fresh lemon.',
  },
];
