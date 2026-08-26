import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function myFeedPlugin (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed/feed.xml",
    stylesheet: "pretty-atom-feed.xsl",
    templateData: {
      eleventyNavigation: {
        key: "Feed",
        order: 4
      }
    },
    collection: {
      name: "posts",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "Blog Title",
      subtitle: "This is a longer description about your blog.",
      base: "https://example.com/",
      author: {
        name: "Your Name"
      }
    }
  });
}
