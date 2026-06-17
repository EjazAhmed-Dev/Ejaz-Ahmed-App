import { useContext, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AppContext } from '../context/AppContext';
import { defaultExerciseImage, theme } from '../styles/theme';

const initialForm = {
  name: '',
  description: '',
  imageUrl: '',
};

export default function AddExerciseScreen({ navigation }) {
  const { addExercise } = useContext(AppContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.';
    }

    if (!form.description.trim()) {
      nextErrors.description = 'Description is required.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      Alert.alert('Missing details', 'Please complete the required fields before saving.');
      return;
    }

    addExercise({
      name: form.name.trim(),
      description: form.description.trim(),
      imageUrl: form.imageUrl.trim() || defaultExerciseImage,
    });

    setForm(initialForm);
    setErrors({});
    Alert.alert('Exercise added', 'Your new exercise is ready on the Home tab.');
    navigation.getParent()?.navigate('HomeTab');
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.backgroundArcOne} />
      <View style={styles.backgroundArcTwo} />
      <View style={styles.backgroundArcThree} />

      <View style={styles.mainPanel}>
        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.topRow}>
              <CustomButton title="Back" variant="ghost" iconName="arrow-back" onPress={() => navigation.getParent()?.navigate('HomeTab')} style={styles.backButton} />
              <View style={styles.topRightPill}>
                <Ionicons name="add-circle-outline" size={16} color={theme.colors.white} />
                <Text style={styles.topRightPillText}>Create</Text>
              </View>
            </View>

            <View style={styles.header}>
              <Text style={styles.kicker}>ADD EXERCISE</Text>
              <Text style={styles.title}>Create a custom workout.</Text>
              <Text style={styles.subtitle}>
                Add your own routine with a name, short description, and an optional image URL.
              </Text>
            </View>

            <View style={styles.tipCardRow}>
              <View style={styles.tipCardDark}>
                <Text style={styles.tipTitleDark}>Required</Text>
                <Text style={styles.tipTextDark}>Name + Description</Text>
              </View>
              <View style={styles.tipCard}>
                <Text style={styles.tipTitle}>Optional</Text>
                <Text style={styles.tipText}>Image URL</Text>
              </View>
            </View>

            <View style={styles.formCard}>
              <InputField
                label="Name"
                value={form.name}
                onChangeText={(value) => updateField('name', value)}
                placeholder="e.g. Evening Walk"
                error={errors.name}
              />

              <InputField
                label="Description"
                value={form.description}
                onChangeText={(value) => updateField('description', value)}
                placeholder="Write a short exercise description"
                multiline
                error={errors.description}
              />

              <InputField
                label="Image URL (optional)"
                value={form.imageUrl}
                onChangeText={(value) => updateField('imageUrl', value)}
                placeholder="https://..."
                autoCapitalize="none"
              />

              <CustomButton title="Save Exercise" iconName="save-outline" onPress={handleSubmit} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  flex: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 24,
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
  header: {
    gap: 6,
  },
  kicker: {
    color: theme.colors.muted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: theme.colors.secondary,
    fontSize: 44,
    fontWeight: '600',
    lineHeight: 46,
    letterSpacing: -0.8,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  tipCardRow: {
    flexDirection: 'row',
    gap: 10,
  },
  tipCard: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#F5EDE3',
    padding: 12,
    gap: 2,
  },
  tipCardDark: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: theme.colors.secondary,
    padding: 12,
    gap: 2,
  },
  tipTitle: {
    color: theme.colors.muted,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  tipTitleDark: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  tipText: {
    color: theme.colors.secondary,
    fontSize: 14,
    fontWeight: '700',
  },
  tipTextDark: {
    color: theme.colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    gap: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
});