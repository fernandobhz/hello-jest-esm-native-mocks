import { jest } from '@jest/globals';

describe(`jest es6 native mocs`, () => {

  it(`first test writing a file to disk`, async () => {
    jest.unstable_mockModule(`fs`, () => {
      return {
        default: {
          writeFileSync: jest.fn().mockImplementation(() => {})
        }
      }
    });

    const { default: rw } = await import(`../src/index.mjs`);
    const { writeText } = rw;

    writeText();
  });

});
