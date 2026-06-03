const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Decrease border radius significantly to rounded-lg (8px) everywhere
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-lg');
  content = content.replace(/rounded-\[3rem\]/g, 'rounded-lg');
  content = content.replace(/rounded-3xl/g, 'rounded-lg');
  content = content.replace(/rounded-2xl/g, 'rounded-lg');
  content = content.replace(/rounded-xl/g, 'rounded-lg');
  content = content.replace(/rounded-\[10px\]/g, 'rounded-lg');
  content = content.replace(/rounded-\[12px\]/g, 'rounded-lg');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
