import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      // TODO: Add your VAPI API call here
      // Example:
      // const response = await fetch('YOUR_VAPI_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('Call initiated successfully!')
      setFormData({ name: '', email: '', phone: '' })
    } catch (error) {
      setMessage('Error initiating call. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🤖 AI Call Assistant</h1>
          <p>Enter your details to receive a call</p>
        </div>
      </header>

      <main className="main-content">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Initiating Call...' : 'Start Call'}
            </button>

            {message && (
              <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>AI Call Assistant © 2026 | Powered by VAPI</p>
      </footer>
    </div>
  )
}

export default App
      </footer>
    </div>
  )
}

export default App
