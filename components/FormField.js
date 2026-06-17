import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LUNA } from './data';

export default function FormField({ label, multiline, ...props }) {
  return (
    <View style={styles.fieldGroup}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        placeholderTextColor={LUNA.sky}
        style={[styles.input, multiline && styles.textArea]}
        multiline={multiline}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldGroup: {
    gap: 8,
  },
  fieldLabel: {
    color: LUNA.steel,
    fontSize: 13,
    fontWeight: '700',
  },
  input: {
    minHeight: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(255,255,255,0.78)',
    color: LUNA.midnight,
    borderWidth: 1,
    borderColor: 'rgba(84, 172, 191, 0.35)',
    fontSize: 16,
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
});