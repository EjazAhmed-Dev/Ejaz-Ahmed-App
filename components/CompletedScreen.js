import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AppHeader from './AppHeader';
import { LUNA } from './data';

export default function CompletedScreen({ exercises, onBack, onExercisePress }) {
  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={18} color={LUNA.navy} />
        <Text style={styles.backButtonText}>Home</Text>
      </Pressable>

      <AppHeader
        title="Completed exercises"
        subtitle="See the workouts you have already marked as done."
        onQuotePress={onBack}
      />

      {exercises.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialCommunityIcons name="check-decagram-outline" size={36} color={LUNA.steel} />
          <Text style={styles.emptyTitle}>Nothing completed yet</Text>
          <Text style={styles.body}>Mark any exercise as completed from the home screen or detail screen.</Text>
        </View>
      ) : (
        exercises.map((exercise) => (
          <Pressable key={exercise.id} style={styles.row} onPress={() => onExercisePress(exercise)}>
            <Image source={{ uri: exercise.image }} style={styles.avatar} />
            <View style={styles.flexGrow}>
              <Text style={styles.rowTitle}>{exercise.name}</Text>
              <Text style={styles.caption}>{exercise.target}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={LUNA.sky} />
          </Pressable>
        ))
      )}
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
  emptyState: {
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 28,
    padding: 24,
    alignItems: 'center',
    gap: 10,
  },
  emptyTitle: {
    color: LUNA.steel,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  body: {
    color: LUNA.midnight,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'rgba(255,255,255,0.86)',
    borderRadius: 22,
    padding: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
  },
  flexGrow: {
    flex: 1,
  },
  rowTitle: {
    color: LUNA.steel,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  caption: {
    color: LUNA.sky,
    fontSize: 13,
    lineHeight: 18,
  },
});