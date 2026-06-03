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

  // Let's explicitly target known button classes and replace with small classes.
  // We'll replace sequences of padding and text-size with "py-2 px-4 text-sm"
  
  // Specific replacements for known large/medium paddings
  content = content.replace(/py-4 px-10/g, 'py-2 px-4');
  content = content.replace(/py-4 px-8/g, 'py-2 px-4');
  content = content.replace(/py-3\.5 px-8/g, 'py-2 px-4');
  content = content.replace(/py-3 px-6/g, 'py-2 px-4');
  content = content.replace(/py-2\.5 px-6/g, 'py-2 px-4');
  content = content.replace(/py-2 px-5/g, 'py-2 px-4');
  content = content.replace(/md:py-3\.5 md:px-8/g, '');
  content = content.replace(/md:rounded-2xl/g, '');
  content = content.replace(/text-lg group/g, 'group');
  content = content.replace(/text-base md:text-lg/g, '');
  content = content.replace(/text-sm md:text-lg/g, 'text-sm');
  
  // Replace generic font sizes that conflict
  content = content.replace(/text-sm text-lg/g, 'text-sm');
  content = content.replace(/text-lg text-sm/g, 'text-sm');
  content = content.replace(/text-sm text-sm/g, 'text-sm');

  // Fix OpportunitiesPage specific Email button
  content = content.replace(/py-4 px-8 rounded-xl/g, 'py-2 px-4 text-sm rounded-xl');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log("Done");
