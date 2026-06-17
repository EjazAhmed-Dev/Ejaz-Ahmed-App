import { Alert, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LUNA } from './data';

const aboutText =
  'Full Stack Developer & 3D Designer based in Karachi, specializing in modern web and mobile applications.';

const linkItems = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    url: 'https://ejaz-ahmed.me/',
    icon: 'globe-outline',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ejaz-ahmed-dev/',
    icon: 'logo-linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/EjazAhmed-Dev',
    icon: 'logo-github',
  },
];

export default function AboutDeveloperScreen({ onBack }) {
  const handleOpenLink = async (url) => {
    if (!url) {
      Alert.alert('Link not available', 'This link is not provided.');
      return;
    }

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Unable to open link', 'Please try again in a moment.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screen} showsVerticalScrollIndicator={false}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={20} color={LUNA.navy} />
      </Pressable>

      <Text style={styles.headerTitle}>About Developer</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatarCircle}>
          <Image
            source={require('../assets/About screen image/Linkedin img.png')}
            style={styles.avatarImage}
          />
        </View>

        <Text style={styles.name}>Ejaz Ahmed</Text>
        <Text style={styles.role}>Full Stack Developer | 3D Designer</Text>
        <Text style={styles.location}>Karachi, Pakistan</Text>

        <Text style={styles.aboutBody}>{aboutText}</Text>
      </View>

      <View style={styles.linksWrap}>
        {linkItems.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handleOpenLink(item.url)}
            style={({ pressed }) => [styles.linkRow, pressed && styles.linkRowPressed]}
          >
            {({ pressed }) => (
              <View style={[styles.linkInner, pressed && styles.linkInnerPressed]}>
                <Ionicons name={item.icon} size={20} color={LUNA.sky} />
                <Text style={styles.linkLabel}>{item.label}</Text>
                <Ionicons name="arrow-forward" size={18} color={LUNA.steel} />
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 120,
    backgroundColor: '#F4FAFC',
    gap: 16,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#011C40',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  headerTitle: {
    color: '#023859',
    fontSize: 70,
    fontWeight: '700',
    lineHeight: 70,
  },
  profileCard: {
    backgroundColor: '#A7EBF2',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#011C40',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
    gap: 8,
  },
  avatarCircle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F7FB',
    marginBottom: 4,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#023859',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  role: {
    color: '#26658C',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  location: {
    color: '#26658C',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
  },
  aboutBody: {
    color: '#011C40',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 8,
  },
  linksWrap: {
    gap: 10,
  },
  linkRow: {
    borderRadius: 14,
  },
  linkInner: {
    minHeight: 60,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    shadowColor: '#011C40',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  linkRowPressed: {
    opacity: 0.96,
  },
  linkInnerPressed: {
    transform: [{ scale: 0.985 }],
    backgroundColor: '#EEF8FC',
  },
  linkLabel: {
    flex: 1,
    color: '#023859',
    fontSize: 17,
    fontWeight: '600',
  },
});