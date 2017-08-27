document.getElementById('node').innerText = process.versions.node
document.getElementById('chrome').innerText = process.versions.chrome
document.getElementById('electron').innerText = process.versions.electron
document.getElementById('electron-webpack').innerText = require('electron-webpack/package.json').version
