export const getTests = (state) => state.tests.items;

export const testById = (state) => state.tests.testById;

export const currentTestArray = (state) => state.tests.currentTestArray;

export const currentQuestionIndex = (state) => state.tests.currentQuestionIndex;

export const getFilter = (state) => state.filter;

export const results = (state) => state.tests.showResults;

export const currentAnswer = (state) => state.tests.currentAnswer;

export const correctAnswersCount = (state) => state.tests.correctAnswersCount;

export const testResults = (state) => state.tests.results;
