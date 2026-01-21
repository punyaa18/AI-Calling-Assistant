const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API endpoint to handle call requests
app.post('/api/call', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // Validate input
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                error: 'All fields are required' 
            });
        }

        console.log('Call request received:', { name, email, phone });

        // TODO: Add your VAPI integration here
        // Example:
        // const vapiResponse = await fetch('YOUR_VAPI_ENDPOINT', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer YOUR_API_KEY'
        //     },
        //     body: JSON.stringify({ name, email, phone })
        // });

        // For now, simulate success
        res.json({ 
            success: true, 
            message: 'Call initiated successfully!' 
        });

    } catch (error) {
        console.error('Error processing call request:', error);
        res.status(500).json({ 
            error: 'Failed to initiate call. Please try again.' 
        });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📞 AI Call Assistant is ready!`);
});
