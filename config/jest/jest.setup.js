// jest.setup.js
const DEFAULT_PREFIX = 'bs-';
global.PREFIX = DEFAULT_PREFIX;

// Adjust the path to match your project structure
jest.mock('../../src/utils/getPrefix', () => ({
  getPrefix: () => global.PREFIX,
}));
