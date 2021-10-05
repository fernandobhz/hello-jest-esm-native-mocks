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

  it(`second test reading the file from disk`, async () => {
    jest.unstable_mockModule(`fs`, () => {
      return {
        default: {
          readFileSync: jest.fn().mockImplementation(() => {})
        }
      }
    });

    const { default: rw } = await import(`../src/index.mjs`);
    const { readText } = rw;

    readText();
  });

});
