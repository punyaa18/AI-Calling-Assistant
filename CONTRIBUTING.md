# Contributing to AI Call Assistant

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, Node version, etc.)

### Suggesting Enhancements

1. Create a new issue with the "enhancement" label
2. Describe the enhancement in detail
3. Explain why this would be useful
4. Provide examples if applicable

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit with descriptive messages: `git commit -m "Description of changes"`
6. Push to your fork: `git push origin feature/your-feature`
7. Create a Pull Request with:
   - Clear description of changes
   - Link to related issues
   - Screenshots if UI changes

## Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/AI-Call-Assistant.git
cd AI-Call-Assistant

# Install dependencies
cd Final_year_Project
npm install

# Create .env file from example
cp .env.example .env

# Start development server
npm run dev
```

## Code Style

- Follow the existing code style
- Use ESLint: `npm run lint`
- Use descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep first line under 50 characters
- Add detailed description if needed

Example:
```
Add voice transcription feature

- Implement real-time transcription using Vapi AI
- Update UI to display transcript
- Add transcript storage to database
```

## Testing

Before submitting a PR:
- Test your changes thoroughly
- Check for browser compatibility
- Verify responsive design on mobile
- Test with different API scenarios

## Documentation

When adding new features:
- Update README.md if needed
- Add comments in code
- Update API documentation
- Add user guide section if applicable

## Questions?

- Check existing issues and discussions
- Open a discussion for questions
- Email: your.email@example.com

Thank you for contributing! 🙏
