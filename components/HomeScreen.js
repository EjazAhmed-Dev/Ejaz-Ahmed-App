import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import StatCard from './StatCard';
import ExerciseCard from './ExerciseCard';
import { LUNA } from './data';

export default function HomeScreen({
  exercises,
  completedCount,
  totalCount,
  completedIds,
  onExercisePress,
  onToggleCompleted,
  onAddPress,
  onQuotePress,
}) {
  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <AppHeader
        title="Fitness App"
        subtitle="Track your progress, complete workouts, and design routines your way."
        onQuotePress={onQuotePress}
      />

      <View style={styles.statsRow}>
        <StatCard value={`${completedCount}`} label="Completed" accent={LUNA.navy} />
        <StatCard value={`${totalCount}`} label="Exercises" accent={LUNA.steel} />
        <StatCard value="LUNA" label="Palette" accent={LUNA.sky} />
      </View>

      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>Exercise list</Text>
        <Text style={styles.caption}>{completedCount} done today</Text>
      </View>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExerciseCard
            exercise={item}
            completed={completedIds.includes(item.id)}
            onPress={() => onExercisePress(item)}
            onToggleCompleted={() => onToggleCompleted(item.id)}
          />
        )}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
      />

      <Pressable style={styles.primaryButton} onPress={onAddPress}>
        <Text style={styles.primaryButtonText}>Add Exercise</Text>
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
  statsRow: {
    flexDirection: 'row',
    gap: 5,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
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
});