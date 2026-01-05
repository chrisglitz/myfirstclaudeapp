const fs = require('fs');

let content = fs.readFileSync('./data/restaurants.ts', 'utf8');

// First, un-escape ALL apostrophes to start clean
content = content.replace(/\\'/g, "'");

// Now properly escape apostrophes in single-quoted strings
// This regex matches 'string content' and escapes any ' inside
const lines = content.split('\n');
const fixedLines = lines.map(line => {
  // Match lines with name: 'something'
  if (line.includes("name: '")) {
    return line.replace(/name: '(.+)',?$/, (match, nameContent) => {
      // Escape apostrophes in the name
      const escaped = nameContent.replace(/'/g, "\\'");
      return match.endsWith(',') ? `name: '${escaped}',` : `name: '${escaped}'`;
    });
  }
  // Also fix description fields
  if (line.includes("description: '")) {
    return line.replace(/description: '(.+)',?$/, (match, descContent) => {
      const escaped = descContent.replace(/'/g, "\\'");
      return match.endsWith(',') ? `description: '${escaped}',` : `description: '${escaped}'`;
    });
  }
  return line;
});

content = fixedLines.join('\n');

fs.writeFileSync('./data/restaurants.ts', content, 'utf8');
console.log('✓ Fixed all apostrophes');
