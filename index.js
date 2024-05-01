#!/usr/bin/env node

const fs = require('fs');

const projectStructure = {
  'src': ['index.js'],
  'public': [],
  'routes': ['index.js'],
  'middlewares': ['auth.js'],
  'models': ['user.js'],
  'views': ['index.html'],
  'config': ['config.js']
};

Object.entries(projectStructure).forEach(([dir, files]) => {
  fs.mkdirSync(dir, { recursive: true });

  files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''));
});

console.log("Your Express app has been created successfully!");
console.log("Happy coding!");

