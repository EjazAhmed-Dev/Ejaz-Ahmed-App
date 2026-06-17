import { Alert, Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AppHeader from './AppHeader';
import FormField from './FormField';
import { LUNA } from './data';

export default function AddExerciseScreen({ form, onBack, onChangeField, onSave, onQuotePress }) {
  const handlePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert('Permission needed', 'Allow gallery access to upload exercise images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.85,
    });

    if (!result.canceled && result.assets?.[0]?.uri) {
      onChangeField('image', result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
        <Pressable style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={18} color={LUNA.navy} />
          <Text style={styles.backButtonText}>Home</Text>
        </Pressable>

        <AppHeader
          title="Add your own exercise"
          subtitle="Create a custom workout for your routine, goals, or class assignment."
          onQuotePress={onQuotePress}
        />

        <FormField
          label="Exercise name"
          value={form.name}
          onChangeText={(text) => onChangeField('name', text)}
          placeholder="e.g. Evening Walk"
        />
        <FormField
          label="Category"
          value={form.target}
          onChangeText={(text) => onChangeField('target', text)}
          placeholder="e.g. Low impact"
        />

        <View style={styles.inlineFields}>
          <View style={styles.inlineField}>
            <FormField
              label="Duration"
              value={form.duration}
              onChangeText={(text) => onChangeField('duration', text)}
              placeholder="15 min"
            />
          </View>
          <View style={styles.inlineField}>
            <FormField
              label="Calories"
              value={form.calories}
              onChangeText={(text) => onChangeField('calories', text)}
              placeholder="100 kcal"
            />
          </View>
        </View>

        <FormField
          label="Description"
          value={form.description}
          onChangeText={(text) => onChangeField('description', text)}
          placeholder="Write a short description of the exercise"
          multiline
        />

        <View style={styles.imageSection}>
          <Text style={styles.sectionLabel}>Exercise image</Text>
          <Pressable style={styles.imagePickerButton} onPress={handlePickImage}>
            <Ionicons name="image-outline" size={18} color={LUNA.white} />
            <Text style={styles.imagePickerButtonText}>
              {form.image ? 'Change Selected Image' : 'Upload from Device'}
            </Text>
          </Pressable>

          {form.image ? (
            <View style={styles.previewWrap}>
              <Image source={{ uri: form.image }} style={styles.previewImage} />
              <Pressable style={styles.clearImageButton} onPress={() => onChangeField('image', '')}>
                <Text style={styles.clearImageText}>Remove image</Text>
              </Pressable>
            </View>
          ) : (
            <Text style={styles.helperText}>No image selected. A default image will be used if you skip this.</Text>
          )}
        </View>

        <Pressable style={styles.primaryButton} onPress={onSave}>
          <Text style={styles.primaryButtonText}>Save Exercise</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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
  inlineFields: {
    flexDirection: 'row',
    gap: 12,
  },
  inlineField: {
    flex: 1,
  },
  imageSection: {
    gap: 10,
  },
  sectionLabel: {
    color: LUNA.steel,
    fontSize: 13,
    fontWeight: '700',
  },
  imagePickerButton: {
    minHeight: 52,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    backgroundColor: LUNA.steel,
    paddingHorizontal: 16,
  },
  imagePickerButtonText: {
    color: LUNA.white,
    fontSize: 15,
    fontWeight: '700',
  },
  previewWrap: {
    gap: 10,
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 18,
  },
  clearImageButton: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: 'rgba(84, 172, 191, 0.18)',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  clearImageText: {
    color: LUNA.navy,
    fontSize: 13,
    fontWeight: '700',
  },
  helperText: {
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