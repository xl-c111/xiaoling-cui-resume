import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = 'public';
const imagesToOptimize = [
  'hs-certificate.png',
  'ai-engineer-certificate.png',
  'hbnb.png',
  'healthcare.png',
  'flora.jpg',
  'hero.jpg',
  'beenthere.png'
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  for (const image of imagesToOptimize) {
    const inputPath = join(publicDir, image);
    const outputPath = join(publicDir, image.replace(/\.(png|jpg|jpeg)$/, '.webp'));

    try {
      const info = await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const inputStats = await sharp(inputPath).metadata();
      const savings = ((1 - info.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${image}`);
      console.log(`   → ${outputPath}`);
      console.log(`   → Size: ${(info.size / 1024).toFixed(0)}KB (${savings}% smaller)`);
      console.log(`   → Dimensions: ${info.width}x${info.height}\n`);
    } catch (error) {
      console.error(`❌ Error processing ${image}:`, error.message);
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages();
