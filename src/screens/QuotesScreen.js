import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import { fetchRandomQuote } from '../utils/api';
import { theme } from '../styles/theme';

export default function QuotesScreen({ navigation }) {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  const loadQuote = async () => {
    setLoading(true);
    const nextQuote = await fetchRandomQuote();
    setQuote(nextQuote);
    setIsFallback(nextQuote.isFallback);
    setLoading(false);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <CustomButton title="Back" variant="ghost" iconName="arrow-back" onPress={() => navigation.goBack()} style={styles.backButton} />
          <Text style={styles.screenLabel}>QUOTES</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.kicker}>MOTIVATION</Text>
          <Text style={styles.title}>Quotes for your next session</Text>
          <Text style={styles.subtitle}>Fetch a fresh line of motivation from the Quotable API at any time.</Text>
        </View>

        <View style={styles.card}>
          {loading ? (
            <ActivityIndicator size="large" color={theme.colors.secondary} />
          ) : (
            <>
              <Text style={styles.quoteText}>“{quote?.content ?? ''}”</Text>
              <Text style={styles.authorText}>- {quote?.author ?? 'Unknown'}</Text>
              {isFallback ? <Text style={styles.fallbackNote}>Offline quote displayed because the API request failed.</Text> : null}
            </>
          )}
        </View>

        <CustomButton title="New Quote" iconName="refresh-outline" onPress={loadQuote} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 130,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
  },
  screenLabel: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  header: {
    gap: 8,
  },
  kicker: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    minHeight: 240,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.surface,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.shadow.color,
    shadowOpacity: theme.shadow.opacity,
    shadowRadius: theme.shadow.radius,
    shadowOffset: theme.shadow.offset,
    elevation: theme.shadow.elevation,
  },
  quoteText: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'center',
  },
  authorText: {
    marginTop: 14,
    color: theme.colors.secondary,
    fontSize: 15,
    fontWeight: '700',
  },
  fallbackNote: {
    marginTop: 12,
    color: theme.colors.muted,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
});