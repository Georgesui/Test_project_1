/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ["robohash.org"],
 },  
 env: {
	USER_URL: 'https://dummyjson.com/users?limit',
	USER_ON_PAGE: 'https://dummyjson.com/users',
	SEARCH_USER_URL: 'https://dummyjson.com/users/search?q=',
 }
}

module.exports = nextConfig
