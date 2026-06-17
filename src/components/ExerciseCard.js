import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { defaultExerciseImage, theme } from '../styles/theme';

export default function ExerciseCard({ exercise, completed = false, onPress, onMarkCompleted }) {
  const previewText = exercise.description.length > 120 ? `${exercise.description.slice(0, 120).trimEnd()}...` : exercise.description;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: exercise.imageUrl || defaultExerciseImage }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.rowTop}>
          <View style={styles.textBlock}>
            <Text style={styles.category}>Exercise</Text>
            <Text style={styles.title} numberOfLines={1}>
              {exercise.name}
            </Text>
          </View>

          <Pressable
            onPress={(event) => {
              event?.stopPropagation?.();
              if (!completed && onMarkCompleted) {
                onMarkCompleted();
              }
            }}
            style={({ pressed }) => [
              styles.actionButton,
              completed && styles.actionButtonCompleted,
              pressed && styles.actionPressed,
            ]}
          >
            <Ionicons
              name={completed ? 'checkmark' : 'add'}
              size={18}
              color={completed ? theme.colors.white : theme.colors.primary}
            />
          </Pressable>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {previewText}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>{completed ? 'Completed' : 'Tap to open'}</Text>
          <View style={styles.chevronPill}>
            <Ionicons name="chevron-forward" size={14} color={theme.colors.secondary} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: theme.colors.card,
  },
  content: {
    padding: 16,
    gap: 10,
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  category: {
    color: theme.colors.muted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 21,
  },
  actionButton: {
    width: 34,
    height: 34,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(86, 28, 36, 0.08)',
  },
  actionButtonCompleted: {
    backgroundColor: theme.colors.secondary,
  },
  actionPressed: {
    opacity: 0.8,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: theme.colors.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  chevronPill: {
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: 'rgba(86, 28, 36, 0.07)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});