# 🤖 AI Call Assistant

An intelligent voice-based calling assistant powered by **Vapi AI**, **Make.com**, and **Twilio**. This project demonstrates advanced voice AI capabilities for automated customer support, appointment scheduling, and intelligent call routing.

---

## 🌐 Live Demo
📱 **GitHub Pages:** [View Project](https://yourusername.github.io/AI-Call-Assistant)

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Thesis & Research](#thesis--research)
- [Screenshots & Outputs](#screenshots--outputs)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This AI Call Assistant is a comprehensive solution that combines:
- **Voice AI Intelligence** - Powered by Vapi AI for natural language understanding and generation
- **Workflow Automation** - Make.com for connecting various services and APIs
- **Telecommunications** - Twilio for reliable call handling and PSTN integration

The system can handle inbound/outbound calls, understand context, and make intelligent decisions based on predefined workflows.

---

## ✨ Features

✅ **Intelligent Voice Processing**
- Natural language understanding and generation
- Real-time voice transcription
- Contextual conversation management

✅ **Multi-Channel Integration**
- SMS notifications
- Email alerts
- CRM integration via Make.com

✅ **Workflow Automation**
- Custom call routing logic
- Automated escalation
- Call recording and analytics

✅ **Professional UI**
- Real-time call status monitoring
- QR code generation for quick access
- Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Voice AI** | Vapi AI | Natural language voice processing |
| **Automation** | Make.com | Workflow orchestration |
| **Telecommunications** | Twilio | Call handling & SMS |
| **Frontend** | React 19 | User interface |
| **Styling** | Tailwind CSS | UI styling |
| **Routing** | React Router | Client-side navigation |
| **Database** | Supabase | Data persistence |
| **Build Tool** | Vite | Fast development & bundling |
| **Linting** | ESLint | Code quality |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Vapi AI API key
- Twilio credentials
- Make.com workspace

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/AI-Call-Assistant.git
cd AI-Call-Assistant/Final_year_Project

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API credentials to .env
# VITE_VAPI_API_KEY=your_vapi_key
# VITE_TWILIO_ACCOUNT_SID=your_twilio_sid
# VITE_TWILIO_AUTH_TOKEN=your_twilio_token
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_KEY=your_supabase_key
```

### Development

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
AI-Call-Assistant/
├── Final_year_Project/          # Main React application
│   ├── src/                     # Source code
│   ├── index.html               # Entry HTML file
│   ├── package.json             # Dependencies
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS config
│   ├── eslint.config.js         # ESLint configuration
│   └── .env                     # Environment variables
├── docs/                        # GitHub Pages documentation
├── screenshots/                 # Project screenshots & outputs
├── thesis-research/             # Thesis and research papers
└── README.md                    # This file
```

---

## 📚 Thesis & Research

### Final Year Project Documentation

This project is part of a final year computer science capstone project focusing on:
- **AI-Powered Voice Interactions**
- **Workflow Automation in Customer Service**
- **Real-time Communication Systems**

📄 **Research Papers:**
- [Main Thesis Document](./thesis-research/thesis.pdf)
- [Research Paper - Voice AI Implementation](./thesis-research/research-paper.pdf)
- [Technical Documentation](./thesis-research/technical-docs.md)

### Key Research Areas Covered
1. Natural Language Processing for voice
2. Real-time audio processing
3. Workflow automation patterns
4. Telecommunications integration
5. Scalability and reliability

---

## 📸 Screenshots & Outputs

### System Architecture
![System Architecture](./screenshots/architecture.png)

### User Interface
![UI Dashboard](./screenshots/dashboard.png)
![Call Interface](./screenshots/call-interface.png)

### Live Call Demonstrations
- [Call Session 1 Output](./screenshots/call-session-1.mp4)
- [Call Session 2 Output](./screenshots/call-session-2.mp4)

### Performance Metrics
![Performance Metrics](./screenshots/performance-metrics.png)

### Integration Points
![Make.com Workflow](./screenshots/make-workflow.png)
![Twilio Integration](./screenshots/twilio-setup.png)

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `Final_year_Project` directory:

```env
# Vapi AI Configuration
VITE_VAPI_API_KEY=your_vapi_api_key
VITE_VAPI_PHONE_NUMBER=your_vapi_phone

# Twilio Configuration
VITE_TWILIO_ACCOUNT_SID=your_twilio_account_sid
VITE_TWILIO_AUTH_TOKEN=your_twilio_auth_token
VITE_TWILIO_PHONE_NUMBER=your_twilio_phone

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key

# Make.com Webhook
VITE_MAKE_WEBHOOK_URL=your_make_webhook_url
```

### Make.com Setup

1. Create a new scenario in Make.com
2. Configure triggers for different call types
3. Set up webhook URL in your application
4. Map Twilio events to Make.com actions

### Vapi AI Configuration

1. Create account at [Vapi.ai](https://vapi.ai)
2. Set up phone numbers
3. Configure assistant settings
4. Create custom knowledge base

### Twilio Setup

1. Create account at [Twilio.com](https://twilio.com)
2. Verify phone numbers
3. Get Account SID and Auth Token
4. Configure webhooks for incoming calls

---

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
cd Final_year_Project
npm run build

# The build output will be in dist/
# Commit and push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Set source to `gh-pages` branch
4. Choose `/root` or `/docs` folder
5. Your site will be published at `https://yourusername.github.io/AI-Call-Assistant`

### Environment Variables for Production

Set GitHub Secrets for sensitive data:
1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `VITE_VAPI_API_KEY`
   - `VITE_TWILIO_ACCOUNT_SID`
   - `VITE_TWILIO_AUTH_TOKEN`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_KEY`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Support

- **Project Lead:** Your Name
- **Email:** your.email@example.com
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Vapi AI for excellent voice AI capabilities
- Make.com for powerful workflow automation
- Twilio for reliable communications infrastructure
- React and Vite communities for amazing tools

---

## 📚 Additional Resources

- [Vapi AI Documentation](https://docs.vapi.ai)
- [Make.com Documentation](https://make.com/docs)
- [Twilio Documentation](https://www.twilio.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

---

**Last Updated:** January 2026
**Status:** Active Development ✅

---

<div align="center">

⭐ If you found this project helpful, please consider giving it a star!

[View Live Demo](https://yourusername.github.io/AI-Call-Assistant) | [Report Issue](https://github.com/yourusername/AI-Call-Assistant/issues) | [Request Feature](https://github.com/yourusername/AI-Call-Assistant/discussions)

</div>
