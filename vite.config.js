/**
 * @type {import('vite').UserConfig}
 */

 export default{
	base: process.env.NODE_NEV === 'production' ? '/earthquake/' : ''
 }