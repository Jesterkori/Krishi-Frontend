# 🌾 SasyaYojana & KrishiRakshak

React Native app for natural farming and farmer support.

This project focuses on farm planning, soil and pest analysis, and farmer ledger tracking with multi-language support.

---

## ⚙️ Setup

### Requirements
- **Node.js** v18+ (tested on v22.18.0)
- **npm** v10+ (tested on v10.9.3)

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/SasyaYojana-Frontend.git
cd SasyaYojana-Frontend
npm install --legacy-peer-deps
npx expo start
```

> ⚠️ **Note:** Always use the `--legacy-peer-deps` flag while installing. TensorFlow.js requires it to avoid dependency conflicts.

---

## 🧰 Common Issues

### 1. Dependency errors
If you face installation issues:
```bash
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

### 2. Metro bundler not starting or crashing
```bash
npx expo start -c
```

### 3. App not loading or blank screen
- Restart the Expo server
- Reinstall node modules
- Make sure your Node.js version is up to date

---

## 💡 Notes

- Use **Expo Go** to scan the QR code and test on your phone
- Tested on **Android, iOS, and web** (Expo SDK 54)
- **Firebase** handles authentication and data storage

---

## 📦 Dependencies
```
React Native 0.81.5
Expo 54.0.22
TensorFlow.js 4.11.0
Firebase 12.5.0
React Navigation 7.x
```

Full list: Run `npm list --depth=0`
