# Contributing to Coming Soon Template 🚀

First off, thank you for considering contributing to this project! It's people like you that make open source such a great community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your browser and OS information**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the pull request template
- Follow the style guidelines
- Include screenshots for visual changes
- Update documentation if needed
- Test your changes across different browsers

## 💻 Development Setup

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/comingsoon.git
   cd comingsoon
   ```

3. **Open the project**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   npx serve .
   ```

4. **Make your changes**
   - Edit HTML, CSS, or JavaScript files
   - Test in multiple browsers (Chrome, Firefox, Safari)
   - Ensure responsive design works on mobile

5. **Test your changes**
   - Open `index.html` in different browsers
   - Test on mobile devices
   - Verify all animations work smoothly
   - Check console for errors

## 🎨 Style Guidelines

### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Maintain accessibility standards (ARIA labels where needed)
- Use meaningful IDs and class names

### CSS
- Use CSS variables for colors and common values
- Follow BEM naming convention where applicable
- Keep selectors specific but not overly nested
- Include comments for complex animations
- Ensure responsive design (mobile-first approach)

### JavaScript
- Use modern ES6+ syntax
- Keep functions focused and single-purpose
- Include JSDoc comments for complex functions
- Avoid global variables
- Use meaningful variable and function names
- Handle errors gracefully

### Code Formatting
- **Indentation**: 4 spaces (no tabs)
- **Line length**: Max 100 characters where practical
- **Quotes**: Single quotes for JavaScript, double quotes for HTML
- **Semicolons**: Always use in JavaScript
- **Comments**: Use `//` for single-line, `/* */` for multi-line

## 📝 Commit Messages

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests after the first line

**Examples:**
```
Add matrix rain color customization

- Add CSS variables for matrix rain colors
- Update README with customization guide
- Closes #123
```

```
Fix progress bar animation on mobile

The progress bar wasn't animating properly on iOS Safari.
Fixed by adding webkit prefixes.

Fixes #456
```

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes and commit**
   ```bash
   git add .
   git commit -m "Add your descriptive commit message"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with details
   - Link any related issues

6. **Wait for review**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged!

## ✅ Checklist Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] Tested on mobile devices (or responsive mode)
- [ ] No console errors or warnings
- [ ] Documentation updated (if needed)
- [ ] Commit messages are clear and descriptive
- [ ] All animations work smoothly
- [ ] Accessibility standards maintained

## 🎯 Good First Issues

Look for issues labeled `good-first-issue` - these are great for newcomers!

Common areas for contribution:
- Adding new color themes
- Improving animations
- Adding new ASCII art options
- Enhancing mobile experience
- Writing tests
- Improving documentation
- Adding translations

## 💡 Questions?

Feel free to create an issue with the `question` label or reach out to the maintainers.

---

**Thank you for contributing! 🎉**
