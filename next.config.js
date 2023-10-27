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
                hostname: "mizunobr.vtexassets.com",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "http.cat",
                port: '',
                pathname: '/**'
            },
            {
                protocol: "https",
                hostname: "70096.cdn.simplo7.net",
                port: '',
                pathname: '/**'
            }
        ]
    }
}
