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
  
  // Replace large border radius with rounded-xl (except rounded-full)
  content = content.replace(/rounded-\[2rem\]/g, 'rounded-xl');
  content = content.replace(/rounded-\[3rem\]/g, 'rounded-xl');
  content = content.replace(/rounded-3xl/g, 'rounded-xl');
  content = content.replace(/rounded-2xl/g, 'rounded-xl');
  content = content.replace(/rounded-\[10px\]/g, 'rounded-xl');
  
  // Replace button sizes
  content = content.replace(/py-4 px-10/g, 'py-2 px-5 text-sm');
  content = content.replace(/py-4 px-8/g, 'py-2 px-5 text-sm');
  content = content.replace(/py-3\.5 px-8/g, 'py-2 px-5 text-sm');
  content = content.replace(/py-2\.5 px-6/g, 'py-2 px-5 text-sm');
  
  // Fix cases where text-sm was appended multiple times or text-lg is still there
  content = content.replace(/text-sm text-lg/g, 'text-sm');
  content = content.replace(/text-lg text-sm/g, 'text-sm');
  content = content.replace(/text-sm text-sm/g, 'text-sm');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
