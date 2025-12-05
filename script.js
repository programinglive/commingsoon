// Matrix Rain Effect
function createMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);

    let drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }

    function draw() {
        let matrixHTML = '';
        for (let i = 0; i < columns; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;

            if (y > 0 && y < window.innerHeight) {
                matrixHTML += `<span style="position: absolute; left: ${x}px; top: ${y}px; color: rgba(0, 255, 65, ${Math.random() * 0.5 + 0.2}); font-size: ${fontSize}px;">${char}</span>`;
            }

            if (y > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        canvas.innerHTML = matrixHTML;
    }

    setInterval(draw, 50);

    // Recreate on resize
    window.addEventListener('resize', () => {
        const newColumns = Math.floor(window.innerWidth / fontSize);
        if (newColumns !== columns) {
            createMatrixRain();
        }
    });
}

// Typing Animation
function typeCommand() {
    const commands = [
        'npm run build',
        'git commit -m "awesome features"',
        'docker-compose up',
        'yarn dev',
        'make deploy'
    ];

    let commandIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing-command');

    function type() {
        const currentCommand = commands[commandIndex];

        if (charIndex < currentCommand.length) {
            typingElement.textContent += currentCommand.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100 + Math.random() * 100);
        } else {
            setTimeout(() => {
                charIndex = 0;
                typingElement.textContent = '';
                commandIndex = (commandIndex + 1) % commands.length;
                setTimeout(type, 500);
            }, 3000);
        }
    }

    type();
}

// Progress Bar Animation
function animateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    let progress = 0;
    const target = Math.floor(Math.random() * 30) + 65; // Random between 65-95%

    function updateProgress() {
        if (progress < target) {
            progress += Math.random() * 2;
            if (progress > target) progress = target;

            progressFill.style.width = progress + '%';
            progressPercent.textContent = Math.floor(progress) + '%';

            setTimeout(updateProgress, 50);
        } else {
            // Subtle fluctuation
            setInterval(() => {
                const fluctuation = (Math.random() - 0.5) * 2;
                const newProgress = Math.max(target - 2, Math.min(target + 2, progress + fluctuation));
                progressFill.style.width = newProgress + '%';
                progressPercent.textContent = Math.floor(newProgress) + '%';
            }, 2000);
        }
    }

    setTimeout(updateProgress, 1000);
}

// Form Submission
function handleFormSubmit() {
    const form = document.getElementById('notify-form');
    const emailInput = document.getElementById('email-input');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;

        // Here you would normally send the email to your backend
        // For now, just show success message
        console.log('Email submitted:', email);

        // Show success message
        successMessage.classList.add('show');
        emailInput.value = '';

        // Hide message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    });
}

// Update Social Links (customize these!)
function updateSocialLinks() {
    // Update these with your actual social links
    const links = {
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername',
        email: 'mailto:your.email@example.com'
    };

    document.getElementById('github-link').href = links.github;
    document.getElementById('twitter-link').href = links.twitter;
    document.getElementById('email-link').href = links.email;
}

// Random Code Snippets in Background
function addFloatingCode() {
    const codeSnippets = [
        'const promise = new Promise();',
        'async function init() {...}',
        'import { Component } from "react"',
        'while (true) { code(); }',
        'export default App;',
        '// TODO: Make it awesome'
    ];

    setInterval(() => {
        const snippet = document.createElement('div');
        snippet.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        snippet.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            color: rgba(0, 255, 65, 0.1);
            font-size: ${Math.random() * 10 + 10}px;
            pointer-events: none;
            z-index: 0;
            font-family: 'JetBrains Mono', monospace;
            transform: rotate(${Math.random() * 360}deg);
        `;
        document.body.appendChild(snippet);

        setTimeout(() => snippet.remove(), 5000);
    }, 3000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    typeCommand();
    animateProgress();
    handleFormSubmit();
    updateSocialLinks();
    addFloatingCode();

    // Add glitch effect on hover to ASCII art
    const asciiArt = document.querySelector('.ascii-art');
    asciiArt.addEventListener('mouseenter', function () {
        this.style.animation = 'glitch 0.3s ease';
    });

    asciiArt.addEventListener('animationend', function () {
        this.style.animation = '';
    });
});

// Add glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0%, 100% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
    }
`;
document.head.appendChild(style);
