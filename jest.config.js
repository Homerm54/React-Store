/**
 * To make sure that Jest can import the absolute paths configured,
 * we set those paths up in the `moduleNameMapper`.
 * 
 * https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs
 * Thanks to this post to help in the configuration!.
 */

module.exports = {
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
    /*"^@styles(.*)$": "<rootDir>/styles$1",
     Since using modules, we will bootstrpa them with the package above, this way,
     classes names will be rendered in every node, but no real CSS will be aplied*/
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  },
};