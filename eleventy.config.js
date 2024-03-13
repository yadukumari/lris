const directoryOutputPlugin = require("@11ty/eleventy-plugin-directory-output");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // Enable Quiet mode
    eleventyConfig.setQuietMode(true);

    // CSS
    eleventyConfig.addPassthroughCopy("css/*.css");
    // JS
    eleventyConfig.addPassthroughCopy("js/*.js");
    // Assets
    eleventyConfig.addPassthroughCopy("assets/**/*");

    // Directory Output
    eleventyConfig.addPlugin(directoryOutputPlugin);

    // Navigation
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Ignores
    eleventyConfig.ignores.add("README.md");
};

