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

  // Replace remaining large button paddings with small button padding
  content = content.replace(/px-6 py-3/g, 'py-2 px-4 text-sm');
  content = content.replace(/py-3 px-6/g, 'py-2 px-4 text-sm');
  content = content.replace(/py-4 px-6/g, 'py-2 px-4 text-sm');
  content = content.replace(/px-8 py-4/g, 'py-2 px-4 text-sm');
  content = content.replace(/px-10 py-4/g, 'py-2 px-4 text-sm');
  content = content.replace(/px-5 py-3/g, 'py-2 px-4 text-sm');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
