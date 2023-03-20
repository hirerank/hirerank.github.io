const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);

  //eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addWatchTarget("./src/js");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      
      input: "src",
      output: "docs",
    },
  };
};