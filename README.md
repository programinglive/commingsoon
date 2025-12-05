# Coming Soon - Programmer Theme 💻

A sleek, terminal-inspired "Coming Soon" page with programmer vibes. Features matrix rain effects, typing animations, and a modern dark theme perfect for tech projects.

## 📦 NPM Installation

Install the package globally or use npx:

```bash
# Using npx (recommended)
npx @programinglive/comingsoon init

# Or install globally
npm install -g @programinglive/comingsoon
comingsoon init
```

This will copy all necessary files (index.html, style.css, script.js, netlify.toml) to your current directory.

## ✨ Features

- 🖥️ **Terminal-style UI** with authentic command-line aesthetic
- 🌧️ **Matrix rain effect** with falling characters
- ⌨️ **Typing animations** showcasing random commands
- 📊 **Animated progress bar** with dynamic updates
- 📧 **Email subscription form** (ready for Netlify Forms integration)
- 🎨 **Dark mode design** with vibrant green/cyan accents
- 📱 **Fully responsive** for all devices
- ⚡ **Zero dependencies** - pure HTML, CSS, and vanilla JavaScript

## 🚀 Quick Deploy to Netlify

### Option 1: Drag & Drop
1. Drag the entire folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live! 🎉

### Option 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 3: Connect to Git
1. Push this folder to GitHub/GitLab
2. Connect your repository in Netlify
3. Netlify will auto-deploy on every push

## 🛠️ Customization

### Update Social Links
Edit `script.js` and update the `updateSocialLinks()` function:
```javascript
const links = {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:your.email@example.com'
};
```

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --text-primary: #00ff41;    /* Main green */
    --accent-blue: #00d4ff;     /* Links */
    --accent-purple: #bd93f9;   /* Labels */
    --accent-pink: #ff79c6;     /* Hover effects */
}
```

### Enable Email Collection
To collect emails via Netlify Forms:
1. Add `data-netlify="true"` to the form in `index.html`:
```html
<form id="notify-form" class="notify-form" data-netlify="true" name="coming-soon">
```
2. Emails will appear in your Netlify dashboard under Forms

## 📁 File Structure

```
comingsoon/
├── index.html       # Main HTML structure
├── style.css        # All styling and animations
├── script.js        # Interactive features
├── netlify.toml     # Netlify configuration
└── README.md        # This file
```

## 🎨 Design Features

- **Typography**: JetBrains Mono & Fira Code fonts
- **Color Scheme**: Matrix-inspired green with modern accents
- **Animations**: Smooth transitions, glitch effects, heartbeat
- **Effects**: Matrix rain, floating code snippets, typing simulation

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

Free to use for personal and commercial projects!

## 🤝 Contributing

Feel free to customize and make it your own! This is designed to be easily portable to any project.

---

**Made with ♥ and `<code/>` by @programinglive & mahatma mahardhika**
