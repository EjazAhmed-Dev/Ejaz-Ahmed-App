import { useContext } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppContext } from '../context/AppContext';
import { theme } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const { exercises, completedExercises, markAsCompleted } = useContext(AppContext);

  const completedCount = completedExercises.length;
  const totalCount = exercises.length;
  const completionScore = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const renderHeader = () => (
    <View style={styles.headerBlock}>
      <View style={styles.topActionRow}>
        <Pressable style={styles.roundIconButton} onPress={() => navigation.navigate('Quotes')}>
          <Ionicons name="arrow-back" size={20} color={theme.colors.secondary} />
        </Pressable>

        <View style={styles.topActionRight}>
          <Pressable style={styles.roundIconButton} onPress={() => navigation.navigate('Quotes')}>
            <Ionicons name="notifications-outline" size={18} color={theme.colors.secondary} />
          </Pressable>
          <View style={styles.scorePill}>
            <Ionicons name="flame-outline" size={16} color={theme.colors.white} />
            <Text style={styles.scorePillText}>{completionScore}%</Text>
          </View>
        </View>
      </View>

      <View style={styles.titleBlock}>
        <Text style={styles.title}>Ejaz Ahmed Fitness </Text>
        <Text style={styles.subtitle}>
          Build routines, add custom exercises, and track your fitness progress daily.
        </Text>
      </View>



      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <Text style={styles.sectionCaption}>{completedCount}/{totalCount}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.backgroundArcOne} />
      <View style={styles.backgroundArcTwo} />
      <View style={styles.backgroundArcThree} />

      <View style={styles.mainPanel}>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const completed = completedExercises.some((completedExercise) => completedExercise.id === item.id);

            return (
              <Pressable
                onPress={() => navigation.navigate('Detail', { exercise: item })}
                style={({ pressed }) => [styles.actionRow, pressed && styles.rowPressed]}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.avatar} />

                <View style={styles.rowTextWrap}>
                  <Text style={styles.rowTitle} numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.rowSubtitle} numberOfLines={1}>{item.description}</Text>
                </View>

                <Pressable
                  onPress={() => markAsCompleted(item)}
                  style={({ pressed }) => [styles.rowActionIcon, completed && styles.rowActionIconCompleted, pressed && styles.rowActionPressed]}
                >
                  <Ionicons
                    name={completed ? 'checkmark' : 'heart-outline'}
                    size={15}
                    color={completed ? theme.colors.white : theme.colors.secondary}
                  />
                </Pressable>
              </Pressable>
            );
          }}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No exercises yet</Text>
              <Text style={styles.emptyText}>Use the center tab button to add your first exercise.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFE6DB',
  },
  backgroundArcOne: {
    position: 'absolute',
    left: -180,
    right: -180,
    bottom: -300,
    height: 520,
    borderRadius: 520,
    backgroundColor: '#E7C8AB',
  },
  backgroundArcTwo: {
    position: 'absolute',
    left: -160,
    right: -160,
    bottom: -360,
    height: 520,
    borderRadius: 520,
    backgroundColor: '#D5947D',
  },
  backgroundArcThree: {
    position: 'absolute',
    left: -140,
    right: -140,
    bottom: -420,
    height: 520,
    borderRadius: 520,
    backgroundColor: '#7D3D49',
  },
  mainPanel: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 92,
    backgroundColor: theme.colors.surface,
    borderRadius: 36,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  listContent: {
    paddingBottom: 28,
    paddingTop: 10,
  },
  headerBlock: {
    gap: 14,
    paddingHorizontal: 8,
    paddingTop: 6,
    marginBottom: 4,
  },
  topActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topActionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  roundIconButton: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EDE3',
  },
  scorePill: {
    minHeight: 40,
    borderRadius: 999,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  scorePillText: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  titleBlock: {
    gap: 8,
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '600',
    letterSpacing: -1,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: theme.colors.secondary,
    fontSize: 26,
    fontWeight: '700',
  },
  sectionCaption: {
    color: theme.colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  actionRow: {
    minHeight: 76,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  rowPressed: {
    transform: [{ scale: 0.99 }],
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 999,
    backgroundColor: '#E9E1D8',
  },
  rowTextWrap: {
    flex: 1,
    gap: 4,
  },
  rowTitle: {
    color: theme.colors.secondary,
    fontSize: 23,
    fontWeight: '700',
  },
  rowSubtitle: {
    color: theme.colors.muted,
    fontSize: 12,
  },
  rowActionIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    backgroundColor: '#F7F1EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowActionIconCompleted: {
    backgroundColor: theme.colors.secondary,
  },
  rowActionPressed: {
    opacity: 0.8,
  },
  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  emptyTitle: {
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  emptyText: {
    color: theme.colors.text,
    fontSize: 13,
    textAlign: 'center',
  },
});