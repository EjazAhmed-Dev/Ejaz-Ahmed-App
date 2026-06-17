import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LUNA } from './data';

export default function MetaChip({ label, icon }) {
  return (
    <View style={styles.metaChip}>
      <Ionicons name={icon} size={14} color={LUNA.steel} />
      <Text style={styles.metaText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(167, 235, 242, 0.6)',
  },
  metaText: {
    color: LUNA.midnight,
    fontSize: 13,
    fontWeight: '600',
  },
});