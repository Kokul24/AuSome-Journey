# Ausome Journey 🚂

An interactive educational game portal designed for autistic children, built with React and Vite. This gamified learning platform uses ABA (Applied Behavior Analysis) principles to create an engaging and supportive learning environment.

## 🌟 Features

### Core Functionality
- **8 Interactive Professions**: Firefighter, Doctor, Chef, Astronaut, Police Officer, Teacher, Farmer, and Builder
- **Step-by-Step Learning**: Each profession has 4 guided steps following ABA principles
- **Token Economy System**: Star rewards saved in Local Storage to track progress
- **Video Modeling**: Real-world videos after completing each profession
- **Quiz Mode**: "Guess Who?" game to test knowledge with detailed results

### Accessibility Features
- **Text-to-Speech (TTS)**: Auto-reads instructions and responds to hover interactions
- **Visual Reinforcement**: Animated star rewards and progress tracking
- **High Contrast Design**: Soft pastel colors with large, clear buttons
- **Smooth Animations**: Framer Motion for engaging, non-overwhelming transitions

### UI/UX Highlights
- **Train Station Theme**: Beautiful animated train with destination-style carriages
- **Staggered Animations**: Elements appear from different directions with spring physics
- **Responsive Design**: Works on various screen sizes
- **Neutral Quiz Feedback**: No immediate right/wrong hints during quiz

## 🚀 Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Storage**: Browser Local Storage

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kokul24/AuSome-Journey.git
cd AuSome-Journey
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Use

1. **Station Dashboard**: Click on any train carriage to start a profession activity
2. **Job Activities**: Complete 4 steps for each profession
   - Instructions are read aloud automatically
   - Click each step to complete it
   - Earn a star after finishing all steps
   - Watch a reward video
3. **Quiz Mode**: Click "🎮 Guess Who?" button
   - Answer 8 questions about professions
   - View detailed results at the end
   - See correct answers for missed questions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Station.jsx          # Main dashboard with train UI
│   ├── JobActivity.jsx       # Individual profession activities
│   └── Quiz.jsx             # Quiz game component
├── context/
│   └── StarContext.jsx      # Global star state management
├── hooks/
│   └── useTTS.js            # Text-to-Speech hook
├── jobsData.js              # Profession data and video URLs
├── StarAnimation.css        # Animation styles
├── App.jsx                  # Main app with routing
└── main.jsx                 # Entry point

```

## 🎨 Design Principles

- **ABA-Based**: Breaking tasks into manageable steps
- **Visual Reinforcement**: Immediate feedback through animations
- **Predictable Structure**: Consistent layout and interactions
- **Sensory-Friendly**: Soft colors, smooth transitions, optional audio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for inclusive education

---

**Note**: This application is designed as an educational tool and should be used as part of a comprehensive learning program under appropriate guidance.
