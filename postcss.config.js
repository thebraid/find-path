const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssNesting = require('postcss-nesting');
const postCSSCustomProperties = require('postcss-custom-properties');
const colorFunction = require("postcss-color-function");

module.exports = {
    plugins: [
        autoprefixer,
        postcssNested,
        postcssNesting,
        postCSSCustomProperties,
        colorFunction(),

    ]
};
