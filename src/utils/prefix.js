const isProd = process.env.NODE_ENV === 'production';
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/fappk-niable' : '');

export default prefix;
