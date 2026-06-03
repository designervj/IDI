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

  // Change small button classes to medium button classes
  content = content.replace(/py-2 px-4 text-sm/g, 'py-2.5 px-6 text-base');
  content = content.replace(/py-2 px-5 text-sm/g, 'py-2.5 px-6 text-base');
  content = content.replace(/py-2 px-4/g, 'py-2.5 px-6');
  content = content.replace(/py-2 px-5/g, 'py-2.5 px-6');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
