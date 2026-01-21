# AI Call Assistant

A simple web application that collects user information (name, email, and phone number) to initiate AI-powered calls via VAPI.

## Features

- Clean, responsive contact form
- Collects name, email, and phone number
- Ready to integrate with VAPI API
- Modern gradient UI design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Integration

To integrate with VAPI:

1. Get your VAPI API key from [vapi.ai](https://vapi.ai)
2. In `src/App.jsx`, replace the TODO comment in the `handleSubmit` function with your VAPI API call:

```javascript
const response = await fetch('YOUR_VAPI_ENDPOINT', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify(formData)
})
```

## Technologies

- React 19
- Vite
- Tailwind CSS
