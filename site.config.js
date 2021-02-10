module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'bad679c4-7a87-4ea6-8152-2abc0e24d3b2',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'JNote',
  domain: 'boyu.pro',
  author: 'Jerry Yang',

  // open graph metadata (optional)
  description: 'Welcome to my site',
  socialImageTitle: 'Transitive Bullshit',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: 'jerryyangboyu',
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: "https://github.com/jerryyangboyu/nextjs-notion",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '067dd719a912471ea9a3ac10710e7fdf': '/foo',
  //   '0be6efce9daf42688f65c76b89f8eb27': '/bar'
  // }
  pageUrlOverrides: null
}
