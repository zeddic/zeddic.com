async function loadApp() {
  try {
    const {app} = await import('./build/index.js');
  } catch (e) {
    console.log(e);
  }
}

loadApp()
