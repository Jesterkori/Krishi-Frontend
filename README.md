# 🌾 SasyaYojana & KrishiRakshak

**AI-Driven Natural Farming Application**

A React Native mobile app for farm planning, soil health monitoring, pest detection, and farmer ledger management.

---

## 📱 Features

- **SasyaYojana** - Farm Planning & Crop Management
- **KrishiRakshak** - Soil & Pest Intelligence
- **Income Calculator** - Farmer Ledger Tracking
- **Education Hub** - Natural Farming Tutorials
- **Multi-language Support** - EN | ಕನ್ನಡ | हिंदी | தமிழ்

---

## 🛠 Tech Stack

- React Native (Expo SDK 54)
- React Navigation
- TensorFlow.js
- Firebase
- Expo Camera & Location

---

## ⚡ Quick Start

### Prerequisites
- Node.js v18+ (tested on v22.18.0)
- npm v10+ (tested on v10.9.3)

### Installation
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/SasyaYojana-Frontend.git
cd SasyaYojana-Frontend

# Install dependencies (IMPORTANT: use --legacy-peer-deps flag)
npm install --legacy-peer-deps

# Start development server
npx expo start
```

**⚠️ Important:** Always use `--legacy-peer-deps` flag when installing due to TensorFlow version requirements.

---

## 📱 Running the App

After `npx expo start`:
- Press `w` - Open in web browser
- Press `a` - Open Android emulator
- Press `i` - Open iOS simulator
- Scan QR code with **Expo Go** app on your phone

---

## 📂 Project Structure
```
SasyaYojana/
├── App.js                 # Main entry point
├── src/
│   ├── screens/          # Screen components
│   ├── components/       # Reusable components
│   ├── navigation/       # Navigation config
│   ├── services/         # API & Firebase
│   ├── utils/            # Helper functions
│   └── config/           # App configuration
├── assets/               # Images, fonts
└── package.json
```

---

## 🐛 Troubleshooting

### Installation Issues

If you encounter dependency errors:
```bash
# Clean installation
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

### Metro Bundler Issues
```bash
# Clear cache and restart
npx expo start -c
```

---

## 🔧 Development

### Key Dependencies

- `@react-navigation/*` - App navigation
- `@tensorflow/tfjs` - AI/ML for pest detection
- `firebase` - Backend services
- `expo-camera` - Camera for pest scanning
- `expo-location` - GPS for farm locations
- `formik + yup` - Form handling & validation
- `react-native-chart-kit` - Income graphs

---

## 👥 Team

**Internship Project** - November 2025 to January 2026

---

## 📄 License

Internship Project - All rights reserved

---

## 🆘 Support

For issues:
1. Check the troubleshooting section above
2. Ensure you're using `--legacy-peer-deps` flag
3. Create an issue on GitHub with error logs

---

**Made with 💚 for Indian Farmers**