# 🚀 Integration Checklist

## Pre-Setup Requirements

- [ ] Git repository cloned/set up
- [ ] Node.js v14+ installed
- [ ] npm installed
- [ ] A code editor (VS Code recommended)
- [ ] 4 service accounts to create:
  - [ ] VAPI AI account
  - [ ] Make.com account  
  - [ ] Twilio account
  - [ ] Supabase account

---

## Phase 1: VAPI AI Setup (15 minutes)

**Account Setup**
- [ ] Go to https://vapi.ai
- [ ] Create account
- [ ] Verify email
- [ ] Sign in to dashboard

**Assistant Configuration**
- [ ] Click "Create Assistant"
- [ ] Set assistant name
- [ ] Choose voice model
- [ ] Select language(s) - English & Hindi
- [ ] Define system prompt/behavior
- [ ] Set response rules
- [ ] Save assistant

**Get Credentials**
- [ ] Copy Assistant ID
- [ ] Generate API key
- [ ] Store in secure location

**Credentials to Save**
```
VAPI_ASSISTANT_ID = ___________________________
VAPI_API_KEY = ___________________________
```

**Verification**
- [ ] Test in VAPI dashboard
- [ ] Verify assistant responds correctly

---

## Phase 2: Twilio Setup (10 minutes)

**Account Setup**
- [ ] Go to https://console.twilio.com
- [ ] Create account
- [ ] Complete verification
- [ ] Add payment method (for production) or use trial
- [ ] Access console

**Phone Number Purchase**
- [ ] Go to "Phone Numbers" → "Buy a Number"
- [ ] Select country (USA/India/etc)
- [ ] Select area code
- [ ] Purchase phone number
- [ ] Verify number appears in "Active Numbers"

**Get Phone Number ID**
- [ ] Click on purchased number
- [ ] Copy "Phone Number SID"
- [ ] Store securely

**Credentials to Save**
```
TWILIO_PHONE_ID = ___________________________
TWILIO_PHONE_NUMBER = ___________________________
```

**Verification**
- [ ] Phone number shows as active
- [ ] Can see number details
- [ ] Account has sufficient balance

---

## Phase 3: Supabase Setup (15 minutes)

**Account Setup**
- [ ] Go to https://supabase.com
- [ ] Sign up with GitHub/email
- [ ] Verify account
- [ ] Create new project
- [ ] Set project name, password, region
- [ ] Wait for project initialization

**Database Setup**
- [ ] Go to "SQL Editor"
- [ ] Create table `contacts`:
  ```sql
  CREATE TABLE contacts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
  ```
- [ ] Create index on phone: `CREATE INDEX idx_phone ON contacts(phone);`
- [ ] Optional: Create table `call_logs` for history

**Get Credentials**
- [ ] Go to "Settings" → "API"
- [ ] Copy Project URL
- [ ] Copy Anon Public Key
- [ ] Store securely

**Credentials to Save**
```
SUPABASE_URL = ___________________________
SUPABASE_ANON_KEY = ___________________________
```

**Verification**
- [ ] Can access project dashboard
- [ ] `contacts` table created
- [ ] Can view table structure

---

## Phase 4: Make.com Workflow Setup (30 minutes)

**Account Setup**
- [ ] Go to https://make.com
- [ ] Sign up (can use Google/email)
- [ ] Complete verification
- [ ] Access dashboard

**Create New Scenario**
- [ ] Click "Create a new scenario"
- [ ] Name it: "AI Call Assistant"
- [ ] Set project name

**Module 1: Webhook (Trigger)**
- [ ] Click "Add a trigger"
- [ ] Search "Webhooks"
- [ ] Select "Custom Webhook"
- [ ] Click "Add"
- [ ] Copy webhook URL
- [ ] Note the URL for later

**Module 2: Supabase (Store Contact)**
- [ ] Click "+" to add module
- [ ] Search "Supabase"
- [ ] Select "Create a record"
- [ ] Connect Supabase account (use API key)
- [ ] Select table: `contacts`
- [ ] Map fields from webhook (name, email, phone)

**Module 3: Array Aggregator**
- [ ] Click "+" to add module
- [ ] Search "Array Aggregator"
- [ ] Select "Array Aggregator"
- [ ] Set Array: contacts data
- [ ] Configure for batch processing

**Module 4: VAPI Configuration**
- [ ] Click "+" to add module
- [ ] Search "Tools" or "Set Variable"
- [ ] Create JSON with assistant config
- [ ] Include your VAPI Assistant ID
- [ ] Configure language settings

**Module 5: JSON Formatter**
- [ ] Click "+" to add module
- [ ] Search "JSON"
- [ ] Select "Create JSON"
- [ ] Format data for VAPI

**Module 6: HTTP Request to VAPI**
- [ ] Click "+" to add module
- [ ] Search "HTTP"
- [ ] Select "Make a request"
- [ ] Method: POST
- [ ] URL: `https://api.vapi.ai/call`
- [ ] Headers:
  ```
  Authorization: Bearer YOUR_VAPI_API_KEY
  Content-Type: application/json
  ```
- [ ] Body (use sample from `MAKE_WORKFLOW.md`)

**Error Handling (Optional)**
- [ ] Add error handlers
- [ ] Set up retry logic
- [ ] Configure notifications

**Configuration to Save**
```
MAKE_WEBHOOK_URL = ___________________________
```

**Verification**
- [ ] All modules connected properly
- [ ] No errors in scenario
- [ ] Can see data flow

---

## Phase 5: Node.js Backend Setup (10 minutes)

**Installation**
- [ ] Open terminal in project folder
- [ ] Run: `npm install`
- [ ] Wait for dependencies to install
- [ ] Verify no errors

**Environment Configuration**
- [ ] Create `.env` file in project root
- [ ] Add all credentials:
  ```
  PORT=3000
  NODE_ENV=production
  
  MAKE_WEBHOOK_URL=https://hook.make.com/...
  VAPI_API_KEY=sk_...
  VAPI_ASSISTANT_ID=asst_...
  TWILIO_PHONE_ID=PN...
  
  SUPABASE_URL=https://...supabase.co
  SUPABASE_ANON_KEY=eyJ...
  ```
- [ ] Save file
- [ ] Never commit `.env` to git

**Server Startup**
- [ ] Run: `npm start`
- [ ] Verify: "Server is running on http://localhost:3000"
- [ ] Check for errors in console

**Verification**
- [ ] Open http://localhost:3000 in browser
- [ ] Web form displays
- [ ] No console errors
- [ ] Can reach health check: http://localhost:3000/api/health

---

## Phase 6: Integration Testing (20 minutes)

**Test 1: Health Check**
- [ ] URL: http://localhost:3000/api/health
- [ ] Expected: JSON with status "operational"
- [ ] ✅ Passed?

**Test 2: Test Contact Submission**
- [ ] Open http://localhost:3000
- [ ] Fill form with test data:
  ```
  Name: Test User
  Email: test@example.com
  Phone: +1234567890
  ```
- [ ] Click submit
- [ ] Expected: "Call initiated successfully" message
- [ ] ✅ Passed?

**Test 3: Verify Supabase Storage**
- [ ] Go to Supabase dashboard
- [ ] Check `contacts` table
- [ ] Verify test contact was created
- [ ] ✅ Passed?

**Test 4: Verify Make.com Execution**
- [ ] Go to Make.com scenario
- [ ] Check execution logs
- [ ] Verify webhook was triggered
- [ ] Verify all modules executed
- [ ] ✅ Passed?

**Test 5: Verify VAPI Call Initiation**
- [ ] Go to VAPI dashboard
- [ ] Check recent calls
- [ ] Verify call was attempted
- [ ] Check call details/logs
- [ ] ✅ Passed?

**Test 6: Verify Twilio Call**
- [ ] Go to Twilio console
- [ ] Check "Logs" → "Calls"
- [ ] Verify call appears with your phone number
- [ ] Check call duration and status
- [ ] ✅ Passed?

---

## Phase 7: Production Deployment (Optional)

**Before Deployment**
- [ ] All 6 tests passed
- [ ] No sensitive data in code
- [ ] `.env` file is in `.gitignore`
- [ ] Error handling is comprehensive
- [ ] Logging is configured

**Deployment Steps**
- [ ] Choose platform (Heroku/Railway/AWS/etc)
- [ ] Set environment variables on platform
- [ ] Deploy code
- [ ] Update Make.com webhook URL if needed
- [ ] Test all endpoints on production

**Post-Deployment**
- [ ] Monitor service dashboards
- [ ] Set up alerts
- [ ] Enable call logging
- [ ] Configure backup strategy

---

## Final Verification Checklist

**Services Running**
- [ ] VAPI dashboard accessible
- [ ] Make.com scenario active
- [ ] Twilio account has balance
- [ ] Supabase project running
- [ ] Node.js server running

**Credentials Verified**
- [ ] All 4 service credentials stored
- [ ] No hardcoded values in code
- [ ] `.env` file complete and secure
- [ ] API keys are valid and active

**System Working**
- [ ] Web form displays
- [ ] Form submission triggers workflow
- [ ] Data stored in Supabase
- [ ] VAPI receives call initiation
- [ ] Twilio dials phone number
- [ ] AI assistant calls are audible
- [ ] Call logs appear in all dashboards

**Documentation**
- [ ] `README.md` reviewed
- [ ] `QUICK_START.md` followed
- [ ] `ARCHITECTURE.md` understood
- [ ] `MAKE_WORKFLOW.md` configured

---

## Troubleshooting Quick Links

| Error | Solution | Doc |
|-------|----------|-----|
| Webhook not triggering | Check Make.com URL in .env | MAKE_WORKFLOW.md |
| VAPI not receiving calls | Verify API key and assistant ID | QUICK_START.md |
| Calls not going through | Check Twilio balance and phone status | QUICK_START.md |
| Contact not stored | Verify Supabase credentials | QUICK_START.md |
| Server won't start | Run `npm install` again | QUICK_START.md |

---

## Support Resources

- **VAPI**: https://docs.vapi.ai
- **Make.com**: https://www.make.com/en/help  
- **Twilio**: https://www.twilio.com/docs
- **Supabase**: https://supabase.com/docs
- **This Project**: Check [`ARCHITECTURE.md`](ARCHITECTURE.md)

---

**✅ Checklist Complete?** You're ready to deploy! 🚀
