#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'style.css',
    'script.js',
    'netlify.toml'
];

function init() {
    console.log('🚀 Initializing Coming Soon page...\n');

    const targetDir = process.cwd();
    const sourceDir = __dirname;

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        if (fs.existsSync(targetPath)) {
            console.log(`⚠️  ${file} already exists, skipping...`);
            return;
        }

        try {
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`✅ Created ${file}`);
        } catch (error) {
            console.error(`❌ Failed to create ${file}:`, error.message);
        }
    });

    console.log('\n✨ Coming Soon page initialized successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Customize the social links in script.js');
    console.log('   2. Open index.html in your browser to preview');
    console.log('   3. Deploy to Netlify or your preferred platform\n');
}

const command = process.argv[2];

if (command === 'init' || !command) {
    init();
} else {
    console.log('Usage: npx @programinglive/comingsoon init');
}
