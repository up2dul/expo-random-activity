import type React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, sizes } from '@/core/constants';

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
    paddingVertical: sizes.sm,
    paddingHorizontal: sizes.xl,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: sizes.md,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  solidButton: {
    ...baseStyles.button,
    backgroundColor: colors.dark,
  },
  solidText: {
    ...baseStyles.text,
    color: colors.light,
  },
  outlinedButton: {
    ...baseStyles.button,
    backgroundColor: colors.light,
    borderWidth: 2,
    borderColor: colors.dark,
  },
  outlinedText: {
    ...baseStyles.text,
    color: colors.dark,
  },
});
