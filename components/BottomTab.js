import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LUNA } from './data';

export default function BottomTab({ icon, label, active, onPress, emphasized }) {
  return (
    <Pressable style={[styles.tabItem, emphasized && styles.tabItemEmphasized]} onPress={onPress}>
      <Ionicons name={icon} size={emphasized ? 26 : 20} color={active ? LUNA.navy : LUNA.steel} />
      <Text style={[styles.label, emphasized && styles.labelEmphasized, active && styles.labelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  tabItemEmphasized: {
    transform: [{ scale: 1.08 }],
  },
  label: {
    color: LUNA.steel,
    fontSize: 12,
    fontWeight: '600',
  },
  labelEmphasized: {
    fontSize: 13,
  },
  labelActive: {
    color: LUNA.navy,
  },
});