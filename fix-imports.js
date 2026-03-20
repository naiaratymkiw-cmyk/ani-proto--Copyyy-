#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Images mapped to their purposes
const imageMap = {
  '914eaaee154ebf9d1b2d2086f151871dcbf1de61.png': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
  '632814a21edf1e92ab064e81b0252f3022e741f8.png': 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800',
  '635ab4ecd38e46ee3819135a543ca1e9c0169912.png': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
  '529fb43a5368a24c2c2e6095a2abbbca6f847168.png': 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800',
  '21cbfe438b6ce5a16f4f3b3507a64d61b62f8bac.png': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
  '574543a6b63228397481ad081dc7100d094d30b9.png': 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
  '3e461c34cc630e961c39047393b0ee1a4a830921.png': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
  '5da4250fbc9ea87dd8323da1e6323830ab330219.png': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
  '586879380e578463d6668d2f1524d1981078434b.png': 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
  '6ea92b92bfa2807df03bf4b469cf50cea095f4b3.png': 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800',
  '814cbdedf47c643717f6a23dde06abeaea51a423.png': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
  'a8f9c2e3e17ceb759073f68e0f449b0a86ae5e22.png': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  '02d542d6922c9a760bfa87318babb9a4a41b2b68.png': 'https://images.unsplash.com/photo-1582719201952-b80b32c00f54?w=800',
  'e1264a2a7a92aeccb166fe0f591f6965bbfd2e90.png': 'https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?w=800',
  '2ebbeadac80a14945d5d98a2242e7e11f18a4dd9.png': 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800',
  'e4b6e820040e2fc3be30666c8e53a46a6bc0b4d6.png': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
  '1c86e539205022461e788cbb874348bad39f6e0a.png': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
  '0897f8654a105d25cc8722fd75f2066288ffda35.png': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
  '184dbb2cf1264cddcbf4edd0cefa610b12bf4688.png': 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800',
  '86cb352ca2c1d36b5499e4ab5e037679bf0ae807.png': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Replace figma:asset imports
  Object.keys(imageMap).forEach(hash => {
    const regex = new RegExp(`import (\\w+) from "figma:asset/${hash.replace(/\./g, '\\.')}";`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, `const $1 = "${imageMap[hash]}";`);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

console.log('🔧 Fixing figma:asset imports...\n');
walkDir('./src');
console.log('\n✨ Done! Restart your dev server.');
