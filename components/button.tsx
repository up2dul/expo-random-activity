import type React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, SIZES } from '@/core/constants';

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'solid' | 'outlined';
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
  return (
    <Pressable
      style={variant === 'solid' ? styles.solidButton : styles.outlinedButton}
      onPress={onPress}
      {...rest}
    >
      <Text
        style={variant === 'solid' ? styles.solidText : styles.outlinedText}
      >
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
});
