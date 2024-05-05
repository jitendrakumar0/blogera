/** @type {import('next').NextConfig} */
const nextConfig = {
    fastRefresh: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                // pathname: '/store/collection/clarity-blog/images/blog-featured/2/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'blog-backend-w6gs.onrender.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'builtin.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'imageio.forbes.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
