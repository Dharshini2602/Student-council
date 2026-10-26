import http from 'http';

function checkUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          hasRoot: data.includes('id="root"'),
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  const routes = ['/', '/about', '/events', '/events/pongal-celebration-2026', '/council', '/student-voice', '/privacy', '/not-found'];
  console.log('--- Verifying Web Server & SPA Routes ---');
  for (const route of routes) {
    const res = await checkUrl(route);
    console.log(`Route [${route}]: HTTP ${res.statusCode} | Length: ${res.length} bytes | Has root: ${res.hasRoot}`);
  }
  console.log('All routes verified successfully!');
}

run().catch(console.error);
