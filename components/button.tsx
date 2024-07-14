import type React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, SIZES } from '@/core/constants';

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'solid' | 'outlined' | 'danger';
  isLoading?: boolean;
  children: React.ReactNode;
};

export const Button = ({
  onPress,
  variant = 'solid',
  isLoading = false,
  children,
  ...rest
}: ButtonProps) => {
  const selectedStyles: typeof baseStyles = baseStyles;

  switch (variant) {
    case 'outlined':
      selectedStyles.button = styles.outlinedButton;
      selectedStyles.text = styles.outlinedText;
      break;
    case 'danger':
      selectedStyles.button = styles.dangerButton;
      selectedStyles.text = styles.dangerText;
      break;
    default:
      selectedStyles.button = styles.solidButton;
      selectedStyles.text = styles.solidText;
  }

  return (
    <Pressable style={selectedStyles.button} onPress={onPress} {...rest}>
      <Text style={selectedStyles.text}>
        {isLoading ? 'Loading...' : children}
      </Text>
    </Pressable>
  );
};

const baseStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.sm,
    paddingHorizontal: SIZES.xl,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  solidButton: {
    ...baseStyles.button,
    backgroundColor: COLORS.dark,
  },
  solidText: {
    ...baseStyles.text,
    color: COLORS.light,
  },
  outlinedButton: {
    ...baseStyles.button,
    backgroundColor: COLORS.light,
    borderWidth: 2,
    borderColor: COLORS.dark,
  },
  outlinedText: {
    ...baseStyles.text,
    color: COLORS.dark,
  },
  dangerButton: {
    ...baseStyles.button,
    backgroundColor: COLORS.danger,
  },
  dangerText: {
    ...baseStyles.text,
    color: COLORS.light,
  },
});
