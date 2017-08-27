// Initial landing page
document.write(`
  <h1>Hello world!</h1>
  <p>
    You are using Node.js ${process.versions.node},
    Chromium ${process.versions.chrome},
    Electron ${process.versions.electron},
    and <code>electron-webpack</code> ${require('electron-webpack/package.json').version}.
  </p>
`)
