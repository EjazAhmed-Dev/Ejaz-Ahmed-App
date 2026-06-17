import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from './AppHeader';
import MetaChip from './MetaChip';
import { LUNA } from './data';

export default function DetailScreen({ exercise, completed, onBack, onToggleCompleted }) {
  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={18} color={LUNA.navy} />
        <Text style={styles.backButtonText}>Home</Text>
      </Pressable>

      <AppHeader
        title="Exercise detail"
        subtitle="View an exercise image, its description, and track whether it is completed."
        onQuotePress={onBack}
      />

      <Image source={{ uri: exercise.image }} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.kicker}>EXERCISE DETAIL</Text>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.subtitle}>{exercise.target}</Text>
        <Text style={styles.body}>{exercise.description}</Text>

        <View style={styles.metaRow}>
          <MetaChip label={exercise.duration} icon="timer-outline" />
          <MetaChip label={exercise.calories} icon="fire" />
        </View>

        <Pressable
          style={[styles.primaryButton, completed && styles.secondaryButton]}
          onPress={() => onToggleCompleted(exercise.id)}
        >
          <Text style={[styles.primaryButtonText, completed && styles.secondaryButtonText]}>
            {completed ? 'Mark as Incomplete' : 'Mark as Completed'}
          </Text>
        </Pressable>
      </View>
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
  image: {
    width: '100%',
    height: 280,
    borderRadius: 28,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 28,
    padding: 18,
    gap: 10,
  },
  kicker: {
    color: LUNA.sky,
    fontSize: 13,
    letterSpacing: 1.6,
    fontWeight: '700',
  },
  title: {
    color: LUNA.navy,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  subtitle: {
    color: LUNA.steel,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  body: {
    color: LUNA.midnight,
    fontSize: 16,
    lineHeight: 24,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  primaryButton: {
    minHeight: 54,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LUNA.navy,
    paddingHorizontal: 18,
  },
  primaryButtonText: {
    color: LUNA.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: LUNA.sky,
  },
  secondaryButtonText: {
    color: LUNA.white,
  },
});