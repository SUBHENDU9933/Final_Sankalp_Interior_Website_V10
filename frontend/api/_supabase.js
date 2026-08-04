import { createClient } from '@supabase/supabase-js';
import { triggerRestore } from './_wake.js';

// TEMPORARY DIAGNOSTIC — remove after debugging env var issue
const _url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const _key = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
console.log('[DIAG] SUPABASE_URL len=' + _url.length + ' value="' + _url + '"');
console.log('[DIAG] SERVICE_ROLE_KEY len=' + _key.length +
  ' start="' + _key.slice(0, 12) + '" end="' + _key.slice(-6) + '"');
// END TEMPORARY DIAGNOSTIC

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    global: {
      fetch: async (url, options) => {
        const res = await fetch(url, options);
        if (!res.ok && res.status >= 500) triggerRestore();
        return res;
      },
    },
  }
);

export default supabase;
