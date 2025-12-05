#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Online Portfolio...\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
  }
}

// Create public folder if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
  console.log('📁 Created public directory');
}

// Create a simple favicon
const faviconPath = path.join('public', 'favicon.ico');
if (!fs.existsSync(faviconPath)) {
  console.log('🎨 Creating favicon...');
  // This would normally create a real favicon, but for now we'll just note it
  console.log('ℹ️  Add your own favicon.ico to the public folder');
}

console.log('✅ Setup complete!\n');
console.log('🎯 Next steps:');
console.log('   1. Run "npm start" to start the development server');
console.log('   2. Open http://localhost:3000 in your browser');
console.log('   3. Customize the content in src/pages/Home.js');
console.log('   4. Add your own photos and certificates\n');
console.log('📚 Check README.md for detailed usage instructions');

