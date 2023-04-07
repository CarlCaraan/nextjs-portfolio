const sitemap = require("next-sitemap");

module.exports = sitemap({
  // Enter the base URL of your website
  baseUrl: "https://carlcaraan.vercel.app/",
  // Enter the paths of your pages that you want to include in the sitemap
  // You can use dynamic routes and other Next.js features here
  // For example, to include all pages in the /blog directory, you can use the following code:
  //   exclude: ['/blog/*'],
  //   transform: async (config, path) => {
  //     const { getAllPostSlugs } = require('./lib/api');
  //     const slugs = await getAllPostSlugs();
  //     return slugs.map((slug) => `/blog/${slug}`);
  //   }
  // Note: If you have a lot of pages, you may want to generate this dynamically
  // and not manually list each path
  paths: ["/", "/about", "/projects", "/experience", "/contact"],
  // Enter the location of your sitemap in your project
  // This should be a public URL that search engines can access
  // For example, if you want to serve the sitemap at https://www.yourwebsite.com/sitemap.xml,
  // enter '/sitemap.xml' here
  target: "https://carlcaraan.vercel.app//sitemap.xml",
  // Enter any additional configuration options for the sitemap
  // For example, to include images in the sitemap, you can use the following code:
  //   exclude: ['/blog/*'],
  //   transform: async (config, path) => {
  //     const { getAllPosts } = require('./lib/api');
  //     const posts = await getAllPosts();
  //     return posts.map((post) => ({
  //       loc: `/blog/${post.slug}`,
  //       lastmod: post.updatedAt,
  //       images: post.images.map((image) => ({
  //         url: image.url,
  //         caption: image.caption,
  //       })),
  //     }));
  //   },
  //   additionalSitemaps: [
  //     {
  //       path: '/blog-sitemap.xml',
  //       exclude: ['/blog/*'],
  //       transform: async (config, path) => {
  //         const { getAllPostSlugs } = require('./lib/api');
  //         const slugs = await getAllPostSlugs();
  //         return slugs.map((slug) => ({
  //           loc: `/blog/${slug}`,
  //         }));
  //       },
  //     },
  //   ],
  // For a full list of configuration options, see the `next-sitemap` documentation
});
