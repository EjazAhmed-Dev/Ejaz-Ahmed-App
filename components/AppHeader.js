import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LUNA } from './data';

export default function AppHeader({ title, subtitle, onQuotePress }) {
  return (
    <View style={styles.header}>
      <View style={styles.copy}>
        <Text style={styles.kicker}>EJAZ AHMED</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Pressable style={styles.iconBadge} onPress={onQuotePress}>
        <Ionicons name="sparkles-outline" size={18} color={LUNA.navy} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  copy: {
    flex: 1,
  },
  kicker: {
    color: LUNA.sky,
    fontSize: 13,
    letterSpacing: 1.6,
    fontWeight: '700',
    marginBottom: 8,
  },
  title: {
    color: LUNA.navy,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: LUNA.midnight,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 6,
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(84, 172, 191, 0.2)',
  },
});