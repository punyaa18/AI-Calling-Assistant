# Technical Setup Guide

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- Git installed
- GitHub account

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/AI-Call-Assistant.git
cd AI-Call-Assistant
```

### Step 2: Install Dependencies

```bash
cd Final_year_Project
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in `Final_year_Project/` directory:

```bash
cp .env.example .env
```

Edit `.env` and add your API credentials:

```env
# Vapi AI
VITE_VAPI_API_KEY=your_api_key
VITE_VAPI_PHONE_NUMBER=your_phone

# Twilio
VITE_TWILIO_ACCOUNT_SID=your_sid
VITE_TWILIO_AUTH_TOKEN=your_token
VITE_TWILIO_PHONE_NUMBER=your_phone

# Supabase
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_KEY=your_key

# Make.com
VITE_MAKE_WEBHOOK_URL=your_webhook
```

## API Integration Details

### Vapi AI Integration

**Getting Started:**
1. Sign up at [vapi.ai](https://vapi.ai)
2. Create an API key in dashboard
3. Set up a phone number or use Vapi's test number
4. Create an assistant with your custom configuration

**Configuration Example:**
```javascript
const assistant = {
  name: "AI Call Assistant",
  firstMessage: "Hello! How can I help you today?",
  model: "gpt-4",
  temperature: 0.7,
  max_duration: 1800, // 30 minutes
};
```

### Twilio Integration

**Getting Started:**
1. Sign up at [twilio.com](https://twilio.com)
2. Get your Account SID and Auth Token from dashboard
3. Verify your phone numbers (trial account limitation)
4. Set up webhooks for incoming calls

**Webhook Configuration:**
```
POST https://yourdomain.com/api/twilio/webhook
```

### Make.com Integration

**Setting Up Workflows:**
1. Create account at [make.com](https://make.com)
2. Create new scenario
3. Add Webhooks module as trigger
4. Configure actions for different intents
5. Get webhook URL and add to environment

**Example Workflow:**
- Trigger: Call received
- Action 1: Parse call data
- Action 2: Look up customer in CRM
- Action 3: Log to Supabase
- Action 4: Send notification

### Supabase Integration

**Database Setup:**
1. Create project at [supabase.com](https://supabase.com)
2. Create tables for calls, users, analytics
3. Set up Row Level Security policies
4. Get URL and public key

**Tables:**
```sql
-- Calls table
CREATE TABLE calls (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  phone_number VARCHAR,
  duration INT,
  transcript TEXT,
  status VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics table
CREATE TABLE analytics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  metric_name VARCHAR,
  value NUMERIC,
  recorded_at TIMESTAMP DEFAULT NOW()
);
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

Server runs on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output is in `dist/` directory

### Linting

```bash
npm run lint
```

Auto-fix issues:
```bash
npm run lint -- --fix
```

### Preview Production Build

```bash
npm run preview
```

## Testing the Integration

### Test Vapi AI Voice

```javascript
// Example using Vapi API
const response = await fetch('https://api.vapi.ai/assistants', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${VAPI_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Test Assistant',
    // ... configuration
  })
});
```

### Test Twilio Connection

```bash
# Using Twilio CLI
twilio phone-numbers:list
twilio api:core:calls:create --to +1234567890 --from +your-twilio-number
```

### Test Make.com Webhook

```bash
curl -X POST https://your-webhook-url \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## Troubleshooting

### Common Issues

**1. API Key Not Found**
- Ensure `.env` file exists
- Verify all keys are correct
- Restart dev server after changing `.env`

**2. CORS Errors**
- Configure CORS in API services
- Use proxy in Vite if needed
- Check webhook URLs

**3. Port Already in Use**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**4. Module Not Found**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Performance Optimization

- Minimize bundle size
- Lazy load components
- Optimize images
- Use CDN for static assets
- Implement caching strategies

---

[← Back to Documentation](index.md)
