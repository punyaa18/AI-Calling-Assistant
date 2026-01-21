# Quick Start Integration Guide

## 🚀 5-Step Setup Process

### Step 1: VAPI AI Setup (5 minutes)

**Sign Up & Create Assistant**:
1. Go to [vapi.ai](https://vapi.ai)
2. Create account and sign in
3. Create new AI assistant
4. Configure behavior:
   - **Name**: Your assistant name
   - **Language**: English & Hindi
   - **Voice**: Choose preferred voice
   - **Behavior**: Define conversation flow
   - **Instructions**: Set assistant goals
5. Copy your **Assistant ID** and **API Key**
6. Save to environment variables:
   ```
   VAPI_API_KEY=sk_xxxxxxxxxxxxxxxx
   VAPI_ASSISTANT_ID=asst_xxxxxxxxxxxxxxxx
   ```

### Step 2: Twilio Setup (3 minutes)

**Get Your Phone Number**:
1. Go to [Twilio Console](https://console.twilio.com)
2. Buy a phone number (available on trial!)
3. Select country and area code
4. Note your **Phone Number SID**
5. Save for Make.com configuration:
   ```
   TWILIO_PHONE_ID=PN7xxxxxxxxxxxxxxxx
   ```

### Step 3: Make.com Workflow Setup (15 minutes)

**Build Automation Workflow**:
1. Go to [make.com](https://make.com)
2. Create new scenario
3. Add modules in this order:
   - **Webhook** (trigger on form submission)
   - **Supabase** (store contact data)
   - **Array Aggregator** (process batch)
   - **Tools** (configure assistant)
   - **JSON** (format data)
   - **HTTP Request** (trigger VAPI)

**HTTP Module Configuration**:
```
Method: POST
URL: https://api.vapi.ai/call

Headers:
- Authorization: Bearer YOUR_VAPI_KEY
- Content-Type: application/json

Body:
{
  "customer": {
    "number": "{{phone_number}}",
    "name": "{{user_name}}"
  },
  "phoneNumberId": "YOUR_TWILIO_PHONE_ID",
  "assistant": {{assistant_json}}
}
```

4. Get your **Webhook URL** from trigger
5. Save: `MAKE_WEBHOOK_URL=https://hook.make.com/...`

### Step 4: Supabase Setup (5 minutes)

**Database Configuration**:
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Create table `contacts`:
   ```sql
   CREATE TABLE contacts (
     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
   );
   ```
4. Get **Project URL** and **Anon Key**
5. Use in Make.com Supabase module

### Step 5: Node.js Backend Setup (2 minutes)

**Environment Setup**:
1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```bash
   PORT=3000
   MAKE_WEBHOOK_URL=https://hook.make.com/...
   VAPI_API_KEY=sk_...
   VAPI_ASSISTANT_ID=asst_...
   NODE_ENV=production
   ```

3. Start server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000`

---

## 🧪 Testing Your Setup

### Test 1: Health Check
```bash
curl http://localhost:3000/api/health
```
Expected: `{"status":"operational"}`

### Test 2: Make Test Call
```bash
curl -X POST http://localhost:3000/api/call \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890"
  }'
```
Expected: Success response with workflow ID

### Test 3: Verify in Dashboards
- **Make.com**: Check workflow execution logs
- **VAPI**: Verify call initiation
- **Twilio**: Check call logs
- **Supabase**: Confirm contact stored

---

## 📊 Architecture Summary

```
USER SUBMITS FORM
       ↓
NODE.JS SERVER validates input
       ↓
MAKE.COM WEBHOOK triggered
       ↓
SUPABASE stores contact ← VAPI configures assistant
       ↓
ARRAY AGGREGATOR processes batch
       ↓
HTTP MODULE sends to VAPI API
       ↓
VAPI initializes conversation
       ↓
TWILIO dials phone number
       ↓
AI ASSISTANT conducts call
       ↓
CALL COMPLETED & LOGGED
```

---

## 🔧 Configuration Reference

### Server Configuration (`server.js`)
```javascript
POST /api/call          // Main call endpoint
GET  /api/health        // Health check
GET  /                  // Serve frontend
```

### VAPI Configuration
- **Languages**: English, Hindi
- **Model**: Latest VAPI voice model
- **Features**: Real-time STT, TTS, call handling

### Make.com Configuration
- **Trigger**: Webhook (form submission)
- **Modules**: 6-8 depending on workflow
- **Error Handling**: Retry logic built in
- **Logging**: Full execution history

### Twilio Configuration
- **Phone Type**: Incoming calls capable
- **Country**: As selected
- **Region**: Based on phone number

### Supabase Configuration
- **Database**: PostgreSQL
- **Tables**: contacts, call_logs (recommended)
- **Auth**: Use anon key for Make.com
- **Backups**: Automated daily

---

## ⚙️ Configuration Checklist

- [ ] VAPI account created and assistant configured
- [ ] VAPI API Key and Assistant ID saved
- [ ] Twilio account created and phone number purchased
- [ ] Twilio Phone Number ID saved
- [ ] Make.com account and workflow created
- [ ] Make.com webhook URL obtained
- [ ] Supabase project created and tables set up
- [ ] `.env` file created with all credentials
- [ ] npm dependencies installed
- [ ] Server started successfully
- [ ] Health check endpoint working
- [ ] Test call sent successfully
- [ ] Call verified in all dashboards

---

## 🆘 Troubleshooting Quick Reference

| Problem | Quick Fix |
|---------|-----------|
| "Cannot find module" | Run `npm install` |
| "Webhook not triggering" | Check MAKE_WEBHOOK_URL in `.env` |
| "VAPI API error" | Verify API key and assistant ID |
| "Call not going through" | Check Twilio balance and phone status |
| "Port already in use" | Change PORT in `.env` or kill process |
| "Supabase connection error" | Verify project URL and credentials |

---

## 📚 Documentation Map

| Document | Purpose |
|----------|---------|
| `README.md` | Project overview and features |
| `ARCHITECTURE.md` | Detailed system architecture |
| `MAKE_WORKFLOW.md` | Make.com workflow setup guide |
| `server.js` | Backend implementation |
| `package.json` | Project dependencies |

---

## 🎯 Next Steps

1. ✅ Complete 5-step setup above
2. ✅ Run test calls
3. ✅ Monitor in all dashboards
4. ✅ Read `ARCHITECTURE.md` for deep dive
5. ✅ Customize assistant for your use case
6. ✅ Deploy to production
7. ✅ Set up monitoring and alerts

---

**Need Help?**
- VAPI Support: https://vapi.ai/support
- Make.com Support: https://www.make.com/support
- Twilio Support: https://www.twilio.com/help
- This Project: Check GitHub issues
