const sassTrue = require('sass-true');
const glob = require('glob');

const TEST_PATH = `**/*.test.scss`;

describe('Sass', () => {
  glob
    .sync(TEST_PATH, { cwd: __dirname, absolute: true })
    .forEach((file) => sassTrue.runSass({ file }, { describe, it } ));
});
