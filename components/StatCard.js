import { StyleSheet, Text, View } from 'react-native';
import { LUNA } from './data';

export default function StatCard({ value, label, accent }) {
  return (
    <View style={[styles.card, { borderColor: accent }]}>
      <Text style={[styles.value, { color: accent }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 12,
    gap: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
  },
  label: {
    color: LUNA.sky,
    fontSize: 13,
    lineHeight: 18,
  },
});