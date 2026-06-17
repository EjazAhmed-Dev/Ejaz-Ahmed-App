import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AppHeader from './AppHeader';
import { LUNA } from './data';

export default function QuotesScreen({ quote, onBack, onRefresh }) {
  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={18} color={LUNA.navy} />
        <Text style={styles.backButtonText}>Home</Text>
      </Pressable>

      <AppHeader
        title="Motivation quote"
        subtitle="An optional screen that brings in encouragement from a public API with a safe fallback."
        onQuotePress={onRefresh}
      />

      <View style={styles.quoteCard}>
        <MaterialCommunityIcons name="format-quote-open" size={28} color={LUNA.sky} />
        <Text style={styles.quoteText}>{quote}</Text>
      </View>

      <Pressable style={styles.secondaryAction} onPress={onRefresh}>
        <Text style={styles.secondaryActionText}>Refresh Quote</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 56,
    paddingHorizontal: 18,
    paddingBottom: 120,
    gap: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.62)',
  },
  backButtonText: {
    color: LUNA.navy,
    fontSize: 13,
    fontWeight: '700',
  },
  quoteCard: {
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderRadius: 28,
    padding: 24,
    gap: 14,
  },
  quoteText: {
    color: LUNA.midnight,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  secondaryAction: {
    minHeight: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(84, 172, 191, 0.18)',
  },
  secondaryActionText: {
    color: LUNA.navy,
    fontSize: 16,
    fontWeight: '700',
  },
});