import 'dotenv/config';
import { writeFileSync } from 'fs';

const { DOCS_USERNAME, DOCS_PASSWORD, VITE_API_URL } = process.env;

if (!DOCS_USERNAME || !DOCS_PASSWORD || !VITE_API_URL) {
  console.error(
    'Missing DOCS_USERNAME, DOCS_PASSWORD, or VITE_API_URL in .env'
  );
  process.exit(1);
}

const auth = Buffer.from(`${DOCS_USERNAME}:${DOCS_PASSWORD}`).toString(
  'base64'
);

const res = await fetch(`${VITE_API_URL}/docs/json`, {
  headers: { Authorization: `Basic ${auth}` }
});

if (!res.ok) {
  console.error(`Failed to fetch spec: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const spec = await res.text();
writeFileSync('./openapi.json', spec);
console.log('openapi.json written');
