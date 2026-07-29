const http = require('http');
const data = JSON.stringify({ email: 'test@local', password: 'password123' });

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', JSON.stringify(res.headers));
  let body = '';
  res.on('data', (chunk) => { body += chunk; });
  res.on('end', () => {
    console.log('BODY', body);
    try { console.log('PARSED', JSON.parse(body)); } catch (e) { /* ignore */ }
  });
});

req.on('error', (e) => { console.error('REQ_ERR', e.message); });
req.write(data);
req.end();
