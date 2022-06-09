module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./ghpages/src/css/");
  eleventyConfig.addWatchTarget("./ghpages/src/css/");
  eleventyConfig.addPassthroughCopy("./ghpages/src/assets");
  eleventyConfig.addWatchTarget("./ghpages/src/assets");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "ghpages/src",
      output: "ghpages/dist",
    },
  };
};