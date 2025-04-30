// scripts/generate-icon-types.js
import fs from 'fs/promises';
import path from 'path';

async function generateIconTypes() {
  const iconDir = path.join(process.cwd(), 'public', 'icons');
  const categories = await fs.readdir(iconDir);

  const iconMap = {};

  for (const category of categories) {
    const categoryPath = path.join(iconDir, category);
    const stats = await fs.stat(categoryPath);

    if (stats.isDirectory()) {
      const files = await fs.readdir(categoryPath);
      iconMap[category] = files
        .filter(file => file.endsWith('.png'))
        .map(file => file.replace('.png', ''));
    }
  }

  // Generate TypeScript type definition
  let typeContent = `// Auto-generated icon type definitions
export type IconCategory = ${Object.keys(iconMap).map(c => `'${c}'`).join(' | ')};

export type IconNameMap = {
${Object.entries(iconMap).map(([category, icons]) =>
  `  ${category}: ${icons.map(i => `'${i}'`).join(' | ')};`
).join('\n')}
};

export type IconName<C extends IconCategory> = C extends keyof IconNameMap
  ? IconNameMap[C]
  : string;
`;

  await fs.writeFile(
    path.join(process.cwd(), 'types', 'icon-types.ts'),
    typeContent
  );

  console.log('Icon types generated successfully!');
}

generateIconTypes().catch(console.error);