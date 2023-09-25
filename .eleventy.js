
module.exports = function (eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "views",
      output: "dist"
    }
  }
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("scripts");

  // Category collection
  eleventyConfig.addCollection('categories', function (collectionApi) {
    const categories = {};

    // Loop
    collectionApi.getAll().forEach((item) => {
      item.data.categories?.forEach((category) => {
        categories[category] ??= [];
        categories[category].push(item);
      });
    });
    return categories;
  });

  // Tag collection
  eleventyConfig.addCollection('tags', function (collectionApi) {
    const tags = {};

    // Loop
    collectionApi.getAll().forEach((item) => {
      item.data.tags?.forEach((tag) => {
        tags[tag] ??= [];
        tags[tag].push(item);
      });
    });
    return tags;
  });


  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};