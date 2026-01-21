# AI Call Assistant

A simple Node.js web application that collects user information (name, email, and phone number) to initiate AI-powered calls via VAPI.

## Features

- Clean, responsive contact form
- Vanilla HTML/CSS/JavaScript (no frameworks)
- Node.js + Express backend
- Ready to integrate with VAPI API
- Modern gradient UI design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and go to: `http://localhost:3000`

## Integration

To integrate with VAPI:

1. Get your VAPI API key from [vapi.ai](https://vapi.ai)
2. In `server.js`, replace the TODO comment with your VAPI API call:

```javascript
const vapiResponse = await fetch('YOUR_VAPI_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ name, email, phone })
});
```

## Technologies

- Node.js
- Express.js
- Vanilla JavaScript
