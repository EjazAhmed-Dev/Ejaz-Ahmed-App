import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../styles/theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.gradientHaloTop} />
      <View style={styles.gradientHaloMid} />
      <View style={styles.gradientHaloBottom} />

      <View style={styles.contentWrap}>
        <View style={styles.logoBlock}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="dumbbell" size={34} color={theme.colors.secondary} />
          </View>
          <View style={styles.logoMiniCircle}>
            <Ionicons name="flame-outline" size={14} color={theme.colors.primary} />
          </View>
        </View>

        <View style={styles.mainTextBlock}>
          <Text style={styles.title}>Welcome to Ejaz Ahmed Fitness App</Text>
          <Text style={styles.subtitle}>Track your workouts. Stay strong. Stay consistent.</Text>
        </View>

        <View style={styles.illustrationWrap}>
          <View style={styles.illustrationCard}>
            <View style={styles.illustrationBlobLeft} />
            <View style={styles.illustrationBlobRight} />
            <View style={styles.illustrationPerson}>
              <Image source={require('../../assets/welcm.png')} style={styles.illustrationImage} />
              
              <View style={styles.barbell}>
                <View style={styles.barbellWeight} />
                <View style={styles.barbellRod} />
                <View style={styles.barbellWeight} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.actionStack}>
          <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]} onPress={() => navigation.replace('MainTabs')}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </Pressable>

        </View>

        <Text style={styles.footerText}>Start your fitness journey today</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E8D8C4',
  },
  gradientHaloTop: {
    position: 'absolute',
    top: -130,
    right: -100,
    width: 280,
    height: 280,
    borderRadius: 280,
    backgroundColor: 'rgba(255, 248, 241, 0.85)',
  },
  gradientHaloMid: {
    position: 'absolute',
    top: 260,
    left: -120,
    width: 260,
    height: 260,
    borderRadius: 260,
    backgroundColor: 'rgba(199, 183, 163, 0.35)',
  },
  gradientHaloBottom: {
    position: 'absolute',
    bottom: -180,
    right: -80,
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: 'rgba(109, 41, 50, 0.18)',
  },
  illustrationImage:{
    width: 250,
    height: 250,
  }
  ,

  contentWrap: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 18,
    justifyContent: 'space-between',
  },
  logoBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#FFF8F1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#561C24',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  logoMiniCircle: {
    position: 'absolute',
    right: '35%',
    bottom: -4,
    width: 28,
    height: 28,
    borderRadius: 999,
    backgroundColor: '#C7B7A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTextBlock: {
    gap: 10,
    marginTop: 6,
  },
  title: {
    color: '#561C24',
    fontSize: 42,
    lineHeight: 46,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#561C24',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    opacity: 0.9,
    fontWeight: '500',
  },
  illustrationWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationCard: {
    width: '100%',
    minHeight: 240,
    borderRadius: 34,
    backgroundColor: '#FFF8F1',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#561C24',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  illustrationBlobLeft: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 180,
    left: -40,
    top: -35,
    backgroundColor: 'rgba(199, 183, 163, 0.45)',
  },
  illustrationBlobRight: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 180,
    right: -45,
    bottom: -45,
    backgroundColor: 'rgba(109, 41, 50, 0.18)',
  },
  illustrationPerson: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  personHead: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: '#6D2932',
  },
  personBody: {
    width: 88,
    height: 82,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    backgroundColor: '#561C24',
  },
  barbell: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  barbellWeight: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: '#6D2932',
  },
  barbellRod: {
    width: 88,
    height: 4,
    borderRadius: 999,
    backgroundColor: '#561C24',
  },
  actionStack: {
    gap: 12,
  },
  primaryButton: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: '#6D2932',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#561C24',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  primaryButtonText: {
    color: '#E8D8C4',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryButton: {
    minHeight: 54,
    borderRadius: 18,
    borderWidth: 1.6,
    borderColor: '#561C24',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 248, 241, 0.52)',
  },
  secondaryButtonText: {
    color: '#561C24',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.95,
  },
  footerText: {
    color: '#561C24',
    opacity: 0.78,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
});