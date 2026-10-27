import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { Palette, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type StyledButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

export default function StyledButton({
  title,
  variant = 'primary',
  disabled,
  style,
  accessibilityState,
  ...props
}: StyledButtonProps) {
  const theme = useTheme();
  const primary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      disabled={disabled}
      accessibilityState={{ ...accessibilityState, disabled: !!disabled }}
      style={(state) => [
        styles.button,
        {
          backgroundColor: primary
            ? theme.primary
            : variant === 'secondary'
              ? Palette.lightAqua
              : 'transparent',
          borderColor: variant === 'outline' ? theme.accentText : 'transparent',
        },
        state.pressed && (primary ? { backgroundColor: Palette.darkTeal } : styles.pressed),
        disabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}>
      <Text
        style={[
          styles.title,
          { color: primary ? '#FFFFFF' : variant === 'secondary' ? Palette.navy : theme.accentText },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    minHeight: 56,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  pressed: { opacity: 0.75 },
  disabled: { opacity: 0.45 },
});
