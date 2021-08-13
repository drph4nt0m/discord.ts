// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "discordx official documentation",
  tagline: "The discord.ts documentation",
  url: "https://oceanroleplay.github.io",
  baseUrl: "/discord.ts/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  organizationName: "oceanroleplay", // Usually your GitHub org/user name.
  projectName: "discord.ts", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Discordx",
      items: [
        {
          type: "doc",
          docId: "installation",
          position: "left",
          label: "Docs",
        },
        {
          position: "right",
          label: "Discord server",
          href: "https://discord.gg/JbVSu4KxwV",
        },
        {
          position: "right",
          label: "Github",
          href: "https://github.com/oceanroleplay/discord.ts",
        },
      ],
    },
    footer: {
      copyright: "Made by discord.ts team with ❤️",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
