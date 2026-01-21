# Make.com Workflow Documentation

## Overview

This Make.com workflow orchestrates an end-to-end AI calling automation system. It manages data flow from user submission through intelligent call execution using VAPI AI and Twilio infrastructure.

## Workflow Architecture

### 1. **Webhook Trigger**
- Acts as the entry point for the automation
- Receives user data (phone number, name, email) from the web form
- Initiates the entire workflow pipeline

### 2. **Supabase Integration**
Database operations for contact management:
- **Store**: Saves new contact information
- **Retrieve**: Fetches phone numbers and user data for calling campaigns
- **Database Configuration**: Set appropriate rate limits and query parameters
  ```
  Max rows per request: As per your requirements
  Auto-backup: Enabled
  ```

### 3. **Data Processing & Aggregation**
- **Normalization**: Cleans and validates phone numbers and contact data
- **Array Aggregator**: Processes batch calls by iterating through the contact list
- Ensures each contact is called individually regardless of batch size

### 4. **VAPI AI Configuration Module**
Defines the AI assistant's behavior and capabilities:
- **Assistant Behavior**: Sets conversational scripts and response logic
- **Language Support**: Configured for both English and Hindi
- **Multi-turn Conversations**: Handles complex dialogues with proper context
- **Response Templates**: Predefined responses for common scenarios

**Important**: Ensure you input your VAPI Assistant ID in this module

### 5. **JSON Parsing Module**
- Structures and validates the assistant configuration
- Formats data for VAPI consumption
- Ensures proper JSON schema compliance

### 6. **HTTP Request Module (VAPI Call Trigger)**
Initiates outbound calls through VAPI API:

**Authentication Header**:
```
Authorization: Bearer YOUR_VAPI_PRIVATE_KEY
Content-Type: application/json
```

**Request Payload**:
```json
{
  "customer": {
    "number": "{{phone_number}}",
    "name": "{{user_name}}",
    "extension": ""
  },
  "phoneNumberId": "<your_twilio_phone_id>",
  "assistant": {{parsed_assistant_config}}
}
```

**Configuration Details**:
- `customer.number`: Target phone number for outbound call
- `customer.name`: Caller identification name
- `phoneNumberId`: Your Twilio phone number identifier
- `assistant`: The AI assistant configuration JSON

## Setup Instructions

### Step 1: Configure Supabase Connection
- Connect your Supabase project
- Set up contact table with fields: phone, name, email
- Test read/write permissions

### Step 2: Define Assistant Behavior
- Enter your VAPI Assistant ID
- Configure speaking preferences
- Set language parameters (English/Hindi)
- Define conversation flow and responses

### Step 3: Set Up HTTP Module
- Retrieve your VAPI API key from [vapi.ai](https://vapi.ai)
- Get your Twilio phone number ID from [Twilio Console](https://console.twilio.com)
- Configure authentication headers in Make.com
- Test the payload structure

### Step 4: Test Workflow
- Submit a test contact through the web form
- Monitor Make.com execution logs
- Verify call initiation in VAPI dashboard
- Check call logs in Twilio console

## Workflow Flow Diagram

```
┌─────────────────────────────────────┐
│   1. Webhook (User Submission)      │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   2. Supabase Store Contact Data    │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   3. Fetch & Normalize Data         │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   4. Array Aggregator (Batch Loop)  │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   5. AI Assistant Config Module     │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   6. JSON Parsing Module            │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   7. HTTP Request to VAPI           │
│      (Initiate Call)                │
└────────────────┬────────────────────┘
                 │
┌────────────────▼────────────────────┐
│   8. Twilio Call Execution          │
└─────────────────────────────────────┘
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Webhook not triggering | Verify webhook URL configuration and test with sample payload |
| Supabase connection fails | Check credentials and network permissions |
| VAPI call not initiating | Verify API key, assistant ID, and phoneNumberId |
| Calls failing | Check Twilio account balance and phone number status |
| Assistant not responding correctly | Review assistant configuration and conversation prompts |

## Best Practices

- ✅ Test workflow with individual contacts before bulk operations
- ✅ Monitor Make.com execution history for errors
- ✅ Keep VAPI Assistant ID and API keys secure
- ✅ Validate phone numbers before storing in Supabase
- ✅ Set up webhook error notifications
- ✅ Regularly review call logs in Twilio console
