/** @type {import('next').NextConfig} */

const isGhActions = !!process.env.GITHUB_ACTIONS;

const nextConfig = {
    output: 'export',
    assetPrefix: isGhActions ? `https://sizer.github.io/hello_next_gh_pages/` : '',
    basePath: isGhActions ? '/hello_next_gh_pages' : '',
};

export default nextConfig;
