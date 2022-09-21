module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['**/*.{js,jsx}'],
	testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
