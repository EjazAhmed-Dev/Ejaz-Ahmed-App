import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { defaultExerciseImage, theme } from '../styles/theme';

export default function DetailScreen({ navigation, route }) {
  const { markAsCompleted, isCompleted } = useContext(AppContext);
  const exercise = route.params?.exercise;

  if (!exercise) {
    return (
      <SafeAreaView style={styles.screen} edges={['top']}>
        <View style={styles.missingState}>
          <Text style={styles.missingTitle}>Exercise not found</Text>
          <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </SafeAreaView>
    );
  }

  const completed = isCompleted(exercise.id);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.backgroundArcOne} />
      <View style={styles.backgroundArcTwo} />
      <View style={styles.backgroundArcThree} />

      <View style={styles.mainPanel}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.topRow}>
            <CustomButton title="Back" variant="ghost" iconName="arrow-back" onPress={() => navigation.goBack()} style={styles.backButton} />
            <View style={styles.topRightPill}>
              <Ionicons name={completed ? 'checkmark-circle' : 'ellipse-outline'} size={16} color={theme.colors.white} />
              <Text style={styles.topRightPillText}>{completed ? 'Done' : 'Active'}</Text>
            </View>
          </View>

          <View style={styles.headerBlock}>
            <Text style={styles.kicker}>DETAIL VIEW</Text>
            <Text style={styles.title}>{exercise.name}</Text>
            <Text style={styles.subtitle}>Track and complete this exercise in your routine.</Text>
          </View>

          <Image source={{ uri: exercise.imageUrl || defaultExerciseImage }} style={styles.image} />

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{exercise.description}</Text>

            <View style={styles.metaRow}>
              <View style={styles.metaPill}>
                <Text style={styles.metaLabel}>Category</Text>
                <Text style={styles.metaValue}>Exercise</Text>
              </View>
              <View style={styles.metaPillDark}>
                <Text style={styles.metaLabelDark}>Status</Text>
                <Text style={styles.metaValueDark}>{completed ? 'Completed' : 'Pending'}</Text>
              </View>
            </View>

            <CustomButton
              title={completed ? 'Already Completed' : 'Mark as Completed'}
              onPress={() => markAsCompleted(exercise)}
              disabled={completed}
            />
          </View>
        </ScrollView>
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
    marginBottom: 84,
    backgroundColor: theme.colors.surface,
    borderRadius: 36,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  content: {
    paddingTop: 12,
    paddingBottom: 28,
    paddingHorizontal: 8,
    gap: 14,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    minHeight: 44,
  },
  topRightPill: {
    minHeight: 40,
    borderRadius: 999,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  topRightPillText: {
    color: theme.colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  headerBlock: {
    gap: 6,
  },
  kicker: {
    color: theme.colors.muted,
    fontSize: 11,
    letterSpacing: 1.2,
    fontWeight: '700',
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 42,
    lineHeight: 44,
    fontWeight: '600',
    letterSpacing: -0.8,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 26,
    backgroundColor: theme.colors.card,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  sectionTitle: {
    color: theme.colors.secondary,
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 21,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 10,
  },
  metaPill: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#F5EDE3',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  metaPillDark: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  metaLabel: {
    color: theme.colors.muted,
    fontSize: 11,
    fontWeight: '600',
  },
  metaValue: {
    color: theme.colors.secondary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  metaLabelDark: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11,
    fontWeight: '600',
  },
  metaValueDark: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },
  missingState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  missingTitle: {
    color: theme.colors.secondary,
    fontSize: 20,
    fontWeight: '800',
  },
});