/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "th.bing.com",
                port: '',
                pathname: '/**'
            }
        ]
    }
}
