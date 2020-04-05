module.exports = {
	bail: 1,
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['src/app/**/*.ts'],
	// The directory where Jest should output its coverage files
	coverageDirectory: '__tests__/coverage',
	// An array of regexp pattern strings used to skip coverage collection
	coveragePathIgnorePatterns: ['/node_modules/'],
	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: ['text', 'lcov'],
	// The test environment that will be used for testing
	testEnvironment: 'node',
	// The glob patterns Jest uses to detect test files
	testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
