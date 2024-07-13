import type React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'solid' | 'outlined';
  children: React.ReactNode;
};

export const Button = ({
  onPress,
  variant = 'solid',
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
        {children}
      </Text>
    </Pressable>
  );
};

const baseStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

const styles = StyleSheet.create({
  solidButton: {
    ...baseStyles.button,
    backgroundColor: 'black',
  },
  solidText: {
    ...baseStyles.text,
    color: 'white',
  },
  outlinedButton: {
    ...baseStyles.button,
    borderWidth: 1,
    borderColor: 'black',
  },
  outlinedText: {
    ...baseStyles.text,
    color: 'black',
  },
});
