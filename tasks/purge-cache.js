import fetch from 'isomorphic-fetch';

const CLOUDFLARE_URL = 'https://api.cloudflare.com/client/v4'
const CLOUDFLARE_ZONE_ID = '';
const CLOUDFLARE_EMAIL = '';
const CLOUDFLARE_API_KEY = '';

export default () => {
  fetch(`${CLOUDFLARE_URL}/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Email': CLOUDFLARE_EMAIL,
      'X-Auth-Key': CLOUDFLARE_API_KEY
    },
    body: JSON.stringify({ purge_everything: true })
  });
}
