# Fitness App

Fitness App is a clean Expo React Native fitness tracker built with React Navigation, Context API, and AsyncStorage.

## Features

- Browse exercises in a performant `FlatList`
- View exercise details with a large image and full description
- Add custom exercises from a validated form
- Mark workouts as completed and view completed items
- Fetch motivational quotes from the Quotable API
- Persist exercises and completion state locally with AsyncStorage

## Project Structure

```text
/src
  /components
    ExerciseCard.js
    CustomButton.js
    InputField.js
  /screens
    HomeScreen.js
    DetailScreen.js
    AddExerciseScreen.js
    CompletedScreen.js
    QuotesScreen.js
  /navigation
    TabNavigator.js
    StackNavigator.js
  /context
    AppContext.js
  /utils
    api.js
  /styles
    theme.js

App.js
```

## Run the App

```bash
npm install
expo start
```

## Notes

- All UI text is in English.
- The app uses the requested palette:
  - `#561C24`
  - `#6D2932`
  - `#C7B7A3`
  - `#E8D8C4`# 💪 Fitness App

**Fitness App** is a clean and intuitive mobile fitness tracking app built with **Expo** and **React Native**. It’s designed to help users manage workouts, discover exercises, stay motivated, and customize their routine with ease.

---

## 🚀 Features

- 🏠 **Home Screen** — Explore a curated list of exercises
- ➕ **Add Exercise** — Create your own exercises with image upload support
- ✅ **Completed Workouts** — Keep track of finished activities
- 💬 **Motivational Quotes** — Get inspired with uplifting quotes 
- 👨‍💻 **About Developer** — Access portfolio, LinkedIn, and GitHub links
- 🎨 **Modern UI** — Designed with the **LUNA color palette**
---

## 🛠 Tech Stack

- ⚛️ React Native  
- 🚀 Expo  
- ⚛️ React  
- 🖼 Expo Image Picker  
- 🎯 React Native Vector Icons  

---

## 📁 Project Structure

```
fitness-app/
│
├── App.js               # App navigation and state management
├── components/         # Screens and reusable UI components
├── assets/             # Images, icons, and static files
├── eas.json            # Expo build configuration
└── package.json
```

---

## ⚡ Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run the App

```bash
npm start
```

After starting, choose how you want to run the app:

- 📱 Scan the QR code using **Expo Go**  
- 🤖 Press `a` to launch on Android  
- 🍎 Press `i` to run on iOS (Mac only)  
- 🌐 Press `w` to open in a browser  

---

## 🏗 Build with EAS

This project uses **Expo Application Services (EAS)** for building apps.

### Install EAS CLI

```bash
npm install -g eas-cli
```

### Login to Expo

```bash
eas login
```

### Configure the Project

```bash
eas build:configure
```

### Build Variants

#### 🔧 Development

```bash
eas build --profile development --platform android
```

#### 👀 Preview

```bash
eas build --profile preview --platform android
```

#### 🚀 Production

```bash
eas build --profile production --platform android
```

👉 Switch `android` to `ios` for iOS builds.

---

## 📦 GitHub Submission Guidelines

1. Push your complete project to a GitHub repository  
2. Make sure to include:
   - Source code  
   - `package-lock.json`  
   - `eas.json`  
3. Share your repository link  
4. Upload a zipped version if required (e.g., Google Classroom)

---

## 📝 Notes

- 🌐 The app uses **remote images** for exercises and quotes  
- 🖼 Profile image path:  
  `assets/About screen image/Profile 1.png`  
- ⚠️ If asset names are changed, update the import paths accordingly  

---

## 📱 App Screens

- 🏠 Home Screen
- <img alt="Image" src="https://github.com/user-attachments/assets/32802a69-d95f-4281-bae7-758b8fb65ee0" />
-<img width="576" height="1112" alt="Image" src="https://github.com/user-attachments/assets/54ac0a8f-3a2a-4cae-8d06-50f6adcec27f" />
-<img width="576" height="1184" alt="Image" src="https://github.com/user-attachments/assets/f1df7b98-6de5-478b-8d85-914f155fbc79" />
-<img width="576" height="1184" alt="Image" src="https://github.com/user-attachments/assets/e8d11ee7-d478-40a3-9fb8-f55b0f5f0891" />
-<img width="576" height="1184" alt="Image" src="https://github.com/user-attachments/assets/d1f05a00-4851-4895-8815-0d66fc9b5bb1" />
-<img width="576" height="1184" alt="Image" src="https://github.com/user-attachments/assets/3ce69ecd-98cf-4100-8aab-c29cab12e0f5" />
-<img width="576" height="1184" alt="Image" src="https://github.com/user-attachments/assets/c9c0c685-7909-4c51-b571-c0326d992837" />
-<img width="1151" height="1155" alt="Image" src="https://github.com/user-attachments/assets/2d492d59-9f81-4b65-bc0d-d4706481e4c7" />
- 🎨 **Modern UI** — Designed with the **LUNA color palette**


---

## 🌟 Future Improvements

- 🔐 User authentication  
- 📊 Progress tracking & analytics   
- 🎯 Personalized workout  

---

## 🤝 Contributing

Feel free to contribute! Fork the repo, open issues, or submit pull requests.

---

## 📄 License

Licensed under the **MIT License**.

---

💥 *Stay consistent. Stay focused. Build your fitness journey with this Fitness App.*
