const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.NEXT_PUBLIC_VERCEL === '1';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || (isProd && !isVercel ? '/fappk-niable' : '');

export default prefix;
