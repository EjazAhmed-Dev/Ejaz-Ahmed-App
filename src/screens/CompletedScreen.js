import { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ExerciseCard from '../components/ExerciseCard';
import { AppContext } from '../context/AppContext';
import { theme } from '../styles/theme';

export default function CompletedScreen({ navigation }) {
  const { completedExercises } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <FlatList
        data={completedExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExerciseCard
            exercise={item}
            completed
            onPress={() => navigation.navigate('Detail', { exercise: item })}
            onMarkCompleted={() => {}}
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>COMPLETED</Text>
            <Text style={styles.title}>Finished exercises</Text>
            <Text style={styles.subtitle}>Every workout you have marked as done appears here.</Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Nothing completed yet</Text>
            <Text style={styles.emptyText}>Mark an exercise as completed from Home or Detail to see it here.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 130,
    gap: 14,
  },
  header: {
    gap: 8,
    marginBottom: 2,
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
  emptyState: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 24,
    alignItems: 'center',
    gap: 8,
  },
  emptyTitle: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  emptyText: {
    color: theme.colors.text,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});