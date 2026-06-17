import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LUNA } from './data';
import MetaChip from './MetaChip';

export default function ExerciseCard({ exercise, completed, onPress, onToggleCompleted }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.rowBetween}>
          <Text style={styles.name}>{exercise.name}</Text>
          <Pressable
            style={[styles.checkButton, completed && styles.checkButtonCompleted]}
            onPress={onToggleCompleted}
          >
            <MaterialCommunityIcons
              name={completed ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}
              size={16}
              color={completed ? LUNA.white : LUNA.steel}
            />
          </Pressable>
        </View>
        <Text style={styles.target}>{exercise.target}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {exercise.description}
        </Text>
        <View style={styles.metaRow}>
          <MetaChip label={exercise.duration} icon="timer-outline" />
          <MetaChip label={exercise.calories} icon="flame-outline" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 26,
    overflow: 'hidden',
    shadowColor: LUNA.midnight,
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 170,
  },
  body: {
    padding: 16,
    gap: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  name: {
    flex: 1,
    color: LUNA.steel,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 28,
  },
  target: {
    color: LUNA.sky,
    fontSize: 13,
    lineHeight: 18,
  },
  description: {
    color: LUNA.midnight,
    fontSize: 16,
    lineHeight: 24,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  checkButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(84, 172, 191, 0.16)',
  },
  checkButtonCompleted: {
    backgroundColor: LUNA.navy,
  },
});