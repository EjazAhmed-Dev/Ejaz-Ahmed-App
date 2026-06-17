import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../styles/theme';

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  iconName,
  style,
  textStyle,
  disabled = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'ghost' && styles.ghostButton,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.content}>
        {iconName ? <Ionicons name={iconName} size={18} color={getTextColor(variant, disabled)} /> : null}
        <Text style={[styles.label, { color: getTextColor(variant, disabled) }, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
}

function getTextColor(variant, disabled) {
  if (disabled) {
    return theme.colors.muted;
  }

  if (variant === 'secondary') {
    return theme.colors.primary;
  }

  if (variant === 'ghost') {
    return theme.colors.secondary;
  }

  return theme.colors.white;
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.shadow.color,
    shadowOpacity: theme.shadow.opacity,
    shadowRadius: theme.shadow.radius,
    shadowOffset: theme.shadow.offset,
    elevation: theme.shadow.elevation,
  },
  secondaryButton: {
    backgroundColor: theme.colors.card,
  },
  ghostButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    shadowOpacity: 0,
    elevation: 0,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.95,
  },
  disabled: {
    opacity: 0.6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
  },
});