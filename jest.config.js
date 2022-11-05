// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@atoms": "<rootDir>/src/core/components/atoms/index",
    "^@layouts": ["<rootDir>/src/core/components/layouts/index"],
    "^@molecules": ["<rootDir>/src/core/components/molecules/index"],
    "^@organisms": ["<rootDir>/src/core/components/organisms/index"],
    "^@constants/(.*)$": ["<rootDir>/src/core/constants/$1"],
    "^@data/(.*)$": ["<rootDir>/src/core/data/$1"],
    "^@guards": ["<rootDir>/src/core/guards/index"],
    "^@hooks": ["<rootDir>/src/core/hooks/index"],
    "^@interfaces/(.*)$": ["<rootDir>/src/core/interfaces/$1"],
    "^@libs/(.*)$": ["<rootDir>/src/core/libs/$1"],
    "^@providers": ["<rootDir>/src/core/providers/index"],
    "^@wrappers": ["<rootDir>/src/core/wrappers/index"],
    "^@services": ["<rootDir>/src/core/services/index"],
    "^@store": ["<rootDir>/src/core/store/index"],
    "^@slices/(.*)$": ["<rootDir>/src/core/store/slices/$1"],
    "^@types/(.*)$": ["<rootDir>/src/core/types/$1"],
    "^@utils/(.*)$": ["<rootDir>/src/core/utils/$1"],
    "^@modules/(.*)$": ["<rootDir>/src/modules/$1"],
    "^@styles/(.*)$": ["./src/styles/$1"],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
