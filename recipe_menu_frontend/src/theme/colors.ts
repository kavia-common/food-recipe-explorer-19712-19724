export const Colors = {
  primary: '#2563EB', // Ocean Blue
  secondary: '#F59E0B', // Amber accent
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  text: '#111827',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  cardShadow: 'rgba(0,0,0,0.06)',
};

export const Gradients = {
  softOcean: ['#2563EB14', '#F9FAFB'],
};

export const Radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  full: 999,
};

export const Spacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
};

export const Typography = {
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: Colors.textMuted,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    color: Colors.text,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    color: Colors.textMuted,
  },
};
