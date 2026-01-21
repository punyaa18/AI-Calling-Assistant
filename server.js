const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// CONFIGURATION
// ============================================
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL || 'YOUR_MAKE_WEBHOOK_URL';
const VAPI_API_KEY = process.env.VAPI_API_KEY || 'YOUR_VAPI_API_KEY';

// ============================================
// MIDDLEWARE
// ============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ============================================
// CORE API ENDPOINT: Handle Call Requests
// ============================================
/**
 * POST /api/call
 * 
 * This endpoint receives user contact information from the web form
 * and triggers the Make.com workflow to initiate an AI call via VAPI.
 * 
 * Flow:
 * 1. Validates user input (name, email, phone)
 * 2. Sends data to Make.com webhook
 * 3. Make.com orchestrates the entire call pipeline:
 *    - Stores contact in Supabase
 *    - Processes and normalizes phone number
 *    - Triggers VAPI AI assistant
 *    - Dials via Twilio infrastructure
 * 
 * @param {string} name - User's full name
 * @param {string} email - User's email address
 * @param {string} phone - User's phone number (E.164 format preferred)
 */
app.post('/api/call', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // Validate input
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                error: 'All fields are required (name, email, phone)' 
            });
        }

        console.log('📱 Call request received:', { name, email, phone });

        // ============================================
        // INTEGRATION POINT: Make.com Workflow
        // ============================================
        // This forwards the request to your Make.com webhook
        // which orchestrates the AI calling workflow
        
        const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name, 
                email, 
                phone,
                timestamp: new Date().toISOString()
            })
        });

        if (!makeResponse.ok) {
            throw new Error(`Make.com webhook error: ${makeResponse.statusText}`);
        }

        const makeData = await makeResponse.json();

        console.log('✅ Workflow triggered successfully');

        res.json({ 
            success: true, 
            message: 'Call initiated successfully! AI assistant will call shortly.',
            workflowId: makeData.id
        });

    } catch (error) {
        console.error('❌ Error processing call request:', error.message);
        res.status(500).json({ 
            error: 'Failed to initiate call. Please try again or contact support.',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// ============================================
// HEALTH CHECK ENDPOINT
// ============================================
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'operational',
        service: 'AI Call Assistant',
        timestamp: new Date().toISOString()
    });
});

// ============================================
// STATIC ROUTES
// ============================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
    console.log(`\n🚀 AI Call Assistant Server Started`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📍 Server: http://localhost:${PORT}`);
    console.log(`🔗 Make.com Webhook: ${MAKE_WEBHOOK_URL.substring(0, 50)}...`);
    console.log(`🤖 VAPI Integration: ${VAPI_API_KEY ? '✅ Configured' : '⚠️  Not configured'}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
});
