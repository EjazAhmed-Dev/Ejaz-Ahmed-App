import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { theme } from '../styles/theme';

const links = [
  {
    label: 'LinkedIn',
    icon: 'linkedin-in',
    backgroundColor: '#E8D8C4',
    url: 'https://www.linkedin.com/in/ejaz-ahmed-dev/',
  },
  {
    label: 'GitHub',
    icon: 'github',
    backgroundColor: '#C7B7A3',
    url: 'https://github.com/EjazAhmed-Dev',
  },
];

const highlights = [
  'Full-stack web and mobile application development',
  'Creative collaboration with product-focused problem solving',
  'Always learning and shipping smart, modern digital solutions',
];

export default function AboutMeScreen({ navigation }) {
  const openExternalLink = async (url) => {
    if (!url) {
      return;
    }

    const isSupported = await Linking.canOpenURL(url);

    if (isSupported) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.backgroundArcOne} />
      <View style={styles.backgroundArcTwo} />
      <View style={styles.backgroundArcThree} />

      <View style={styles.mainPanel}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.topRow}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color={theme.colors.secondary} />
            </Pressable>

            <View style={styles.badge}>
              <FontAwesome5 name="sparkles" size={14} color={theme.colors.secondary} />
            </View>
          </View>

          <View style={styles.headerBlock}>
            <Text style={styles.kicker}>ABOUT ME</Text>
            <Text style={styles.title}>Developer</Text>
            <Text style={styles.subtitle}>
              Full-stack developer building smart, modern digital solutions. Creative, collaborative, and always learning.
            </Text>
          </View>

          <View style={styles.socialRow}>
            {links.map((item) => (
              <Pressable
                key={item.label}
                style={({ pressed }) => [
                  styles.socialPill,
                  { backgroundColor: item.backgroundColor },
                  pressed && styles.socialPillPressed,
                ]}
                onPress={() => openExternalLink(item.url)}
              >
                <FontAwesome5
                  name={item.icon}
                  size={13}
                  color={item.label === 'GitHub' ? theme.colors.secondary : theme.colors.primary}
                />
                <Text style={styles.socialText}>{item.label}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.profileCard}>
            <View style={styles.avatarWrap}>
              <Image source={require('../../assets/ejazlogo.png')} style={styles.avatar} />
            </View>

            <Text style={styles.name}>Ejaz Ahmed</Text>
            <Text style={styles.description}>
              Full-stack developer building smart, modern digital solutions. Creative, collaborative, and always learning.
            </Text>

            <View style={styles.highlightList}>
              {highlights.map((item) => (
                <View key={item} style={styles.highlightItem}>
                  <View style={styles.highlightDot} />
                  <Text style={styles.highlightText}>{item}</Text>
                </View>
              ))}
            </View>
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
  content: {
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 28,
    gap: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: '#F5EDE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: '#F5EDE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBlock: {
    gap: 8,
  },
  kicker: {
    color: '#785b05',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1.4,
  },
  title: {
    color: '#131313',
    fontSize: 40,
    fontWeight: '800',
    lineHeight: 42,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  socialPill: {
    minHeight: 44,
    borderRadius: 999,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  socialText: {
    color: theme.colors.secondary,
    fontSize: 13,
    fontWeight: '700',
  },
  socialPillPressed: {
    opacity: 0.86,
  },
  profileCard: {
    backgroundColor: '#f5eee4',
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 22,
    gap: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  avatarWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },
  name: {
    color: '#131313',
    fontSize: 30,
    fontWeight: '800',
  },
  description: {
    color: '#4E5A60',
    fontSize: 14,
    lineHeight: 22,
  },
  highlightList: {
    gap: 12,
    marginTop: 6,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  highlightDot: {
    width: 12,
    height: 12,
    borderRadius: 999,
    backgroundColor: theme.colors.secondary,
  },
  highlightText: {
    flex: 1,
    color: '#2D3A40',
    fontSize: 13,
    lineHeight: 19,
  },
});