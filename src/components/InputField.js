import { StyleSheet, Text, TextInput, View } from 'react-native';

import { theme } from '../styles/theme';

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  error,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.muted}
        multiline={multiline}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        textAlignVertical={multiline ? 'top' : 'center'}
        style={[styles.input, multiline && styles.multilineInput, error && styles.errorInput]}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  label: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  input: {
    minHeight: 52,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    paddingHorizontal: 16,
    color: theme.colors.text,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'rgba(86, 28, 36, 0.08)',
  },
  multilineInput: {
    minHeight: 132,
    paddingVertical: 14,
  },
  errorInput: {
    borderColor: theme.colors.danger,
  },
  errorText: {
    color: theme.colors.danger,
    fontSize: 12,
    fontWeight: '600',
  },
});