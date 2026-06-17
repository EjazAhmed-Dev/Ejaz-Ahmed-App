import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { defaultExerciseImage } from '../styles/theme';

const STORAGE_KEY = 'fitness-app-state';

const starterExercises = [
  {
    id: '1',
    name: 'Morning Stretch',
    description:
      'A gentle full-body stretch routine to loosen your joints, improve flexibility, and prepare your body for the day.',
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    name: 'Cardio Burn',
    description:
      'A quick cardio session with jumping jacks, fast feet, and brisk movement to raise your heart rate and energize your workout.',
    imageUrl:
      'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '3',
    name: 'Strength Builder',
    description:
      'A beginner-friendly strength routine focused on squats, push-ups, and core stability for balanced fitness.',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '4',
    name: 'Core Focus',
    description:
      'A compact core workout designed to improve stability, posture, and overall body control.',
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const AppContext = createContext(null);

function normalizeExercise(exercise) {
  return {
    id: String(exercise.id ?? Date.now()),
    name: String(exercise.name ?? '').trim(),
    description: String(exercise.description ?? '').trim(),
    imageUrl: String(exercise.imageUrl ?? exercise.image ?? defaultExerciseImage).trim() || defaultExerciseImage,
  };
}

export function AppProvider({ children }) {
  const [exercises, setExercises] = useState(starterExercises);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadState() {
      try {
        const rawState = await AsyncStorage.getItem(STORAGE_KEY);

        if (rawState) {
          const parsedState = JSON.parse(rawState);
          const savedExercises = Array.isArray(parsedState?.exercises)
            ? parsedState.exercises.map(normalizeExercise).filter((exercise) => exercise.name && exercise.description)
            : starterExercises;
          const savedCompleted = Array.isArray(parsedState?.completedExercises)
            ? parsedState.completedExercises.map(normalizeExercise).filter((exercise) => exercise.name && exercise.description)
            : [];

          if (isMounted) {
            setExercises(savedExercises.length > 0 ? savedExercises : starterExercises);
            setCompletedExercises(savedCompleted);
          }
        }
      } catch {
        if (isMounted) {
          setExercises(starterExercises);
          setCompletedExercises([]);
        }
      } finally {
        if (isMounted) {
          setIsReady(true);
        }
      }
    }

    loadState();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        exercises,
        completedExercises,
      }),
    ).catch(() => {});
  }, [completedExercises, exercises, isReady]);

  const addExercise = useCallback((payload) => {
    const newExercise = normalizeExercise({
      ...payload,
      id: String(Date.now()),
    });

    setExercises((current) => [newExercise, ...current]);

    return newExercise;
  }, []);

  const markAsCompleted = useCallback((exercise) => {
    if (!exercise?.id) {
      return;
    }

    setCompletedExercises((current) => {
      if (current.some((item) => item.id === exercise.id)) {
        return current;
      }

      return [normalizeExercise(exercise), ...current];
    });
  }, []);

  const isCompleted = useCallback(
    (exerciseId) => completedExercises.some((exercise) => exercise.id === exerciseId),
    [completedExercises],
  );

  const value = useMemo(
    () => ({
      exercises,
      completedExercises,
      isReady,
      addExercise,
      markAsCompleted,
      isCompleted,
    }),
    [completedExercises, exercises, isCompleted, isReady],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}