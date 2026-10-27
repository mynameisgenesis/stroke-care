/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Palette = {
  primary: '#008F8B',
  darkTeal: '#006F6B',
  lightAqua: '#A8DDDE',
  background: '#F4F8F8',
  navy: '#142B43',
} as const;

export const Colors = {
  light: {
    text: Palette.navy,
    background: Palette.background,
    backgroundElement: Palette.lightAqua,
    backgroundSelected: Palette.lightAqua,
    textSecondary: Palette.darkTeal,
    primary: Palette.primary,
    accentText: Palette.darkTeal,
  },
  dark: {
    text: '#ffffff',
    background: Palette.navy,
    backgroundElement: '#1D3B4B',
    backgroundSelected: Palette.darkTeal,
    textSecondary: Palette.lightAqua,
    primary: Palette.primary,
    accentText: Palette.lightAqua,
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
