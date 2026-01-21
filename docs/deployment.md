# Deployment Guide

## GitHub Pages Setup

### Prerequisites
- GitHub account
- Repository created on GitHub
- GitHub Pages enabled in repository settings

### Step 1: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - This allows automatic deployment

### Step 2: Configure Deployment Workflow

The workflow file `.github/workflows/deploy.yml` is already configured to:
1. Install dependencies
2. Build the React application
3. Deploy to GitHub Pages automatically

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: AI Call Assistant"

# Add GitHub remote
git remote add origin https://github.com/yourusername/AI-Call-Assistant.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: GitHub Actions Deployment

The workflow will:
1. Trigger automatically on push to `main`
2. Build the application
3. Deploy to GitHub Pages
4. Your site will be available at: `https://yourusername.github.io/AI-Call-Assistant`

### Verify Deployment

1. Go to repository → Actions tab
2. Check workflow status
3. Visit your GitHub Pages URL
4. Verify all links and features work

## Environment Variables for Production

### GitHub Secrets Setup

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add each variable:

```
VITE_VAPI_API_KEY
VITE_VAPI_PHONE_NUMBER
VITE_TWILIO_ACCOUNT_SID
VITE_TWILIO_AUTH_TOKEN
VITE_TWILIO_PHONE_NUMBER
VITE_SUPABASE_URL
VITE_SUPABASE_KEY
VITE_MAKE_WEBHOOK_URL
```

### Update Workflow for Secrets

Modify `.github/workflows/deploy.yml`:

```yaml
- name: Build project
  run: cd Final_year_Project && npm run build
  env:
    VITE_VAPI_API_KEY: ${{ secrets.VITE_VAPI_API_KEY }}
    VITE_TWILIO_ACCOUNT_SID: ${{ secrets.VITE_TWILIO_ACCOUNT_SID }}
    VITE_TWILIO_AUTH_TOKEN: ${{ secrets.VITE_TWILIO_AUTH_TOKEN }}
    VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
    VITE_SUPABASE_KEY: ${{ secrets.VITE_SUPABASE_KEY }}
    VITE_MAKE_WEBHOOK_URL: ${{ secrets.VITE_MAKE_WEBHOOK_URL }}
```

## Custom Domain Setup (Optional)

### Add Custom Domain

1. Go to repository Settings → Pages
2. Under "Custom domain" enter your domain
3. Click Save
4. Add CNAME record to your domain provider:

```
CNAME yourdomain.com yourusername.github.io
```

5. Wait for DNS propagation (up to 24 hours)

### HTTPS Setup

- GitHub Pages automatically provides HTTPS
- Enable "Enforce HTTPS" in Pages settings
- Certificate automatically renewed

## Troubleshooting Deployment

### Build Fails

**Check:**
1. Dependencies installed correctly
2. No build errors in local build
3. `.env` example file has correct format
4. Node version compatible

**Solution:**
```bash
# Test build locally
cd Final_year_Project
npm install
npm run build
```

### Workflow Not Triggering

- Check `.github/workflows/deploy.yml` syntax
- Verify branch name is "main"
- Check GitHub Actions enabled in settings
- View workflow logs for errors

### Site Shows 404

**Causes:**
- Deployment not completed
- Wrong base URL in vite.config.js
- Files not built to dist/

**Solution:**
Check `vite.config.js`:
```javascript
export default {
  base: '/AI-Call-Assistant/',
  // ...
}
```

### Environment Variables Not Loading

- Verify secrets are added to GitHub
- Check variable names match exactly
- Rebuild and redeploy after adding secrets
- Check browser console for errors

## Performance Optimization

### Optimize Build

```javascript
// vite.config.js
export default {
  build: {
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
}
```

### Cache Strategy

- Browser caching via headers
- Service worker (if added)
- CDN caching (GitHub Pages uses CDN)

### Monitor Performance

```bash
# Analyze bundle size
npm install -D rollup-plugin-visualizer
```

## Rollback Deployment

If deployment has issues:

```bash
# Revert to previous commit
git revert HEAD

# Push to trigger redeploy
git push origin main
```

## Monitoring & Analytics

### Setup Google Analytics (Optional)

1. Create property in Google Analytics
2. Get tracking ID
3. Install analytics package:
```bash
npm install react-ga
```

4. Add to your React app:
```javascript
import ReactGA from 'react-ga';

ReactGA.initialize('G-XXXXXXXXXX');
```

## Continuous Integration Improvements

### Add Tests

```bash
npm install --save-dev vitest @testing-library/react
```

Add to workflow:
```yaml
- name: Run tests
  run: cd Final_year_Project && npm test
```

### Add Linting Check

```yaml
- name: Lint code
  run: cd Final_year_Project && npm run lint
```

## Security Best Practices

✅ **Always:**
- Keep secrets in GitHub Secrets
- Use `.env.example` for template
- Never commit `.env` file
- Regularly rotate API keys
- Monitor failed deployments

❌ **Never:**
- Hardcode secrets in code
- Commit sensitive data
- Share repository secrets
- Use old/deprecated APIs
- Skip security checks

## Support & Help

- **GitHub Issues:** Report deployment problems
- **Documentation:** Check other guides
- **Status Page:** github.com/status
- **Community:** Search GitHub Discussions

---

[← Back to Documentation](index.md)
