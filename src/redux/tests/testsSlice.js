import { createSlice } from "@reduxjs/toolkit";
import { fetchTests, addTests, deleteTests, fetchTestById } from "./operations";
import { shuffleAnswers } from "../../helpers/helpers";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const testsSlice = createSlice({
  name: "tests",
  initialState: {
    items: [],
    testById: [],
    currentTestArray: [],
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    currentAnswer: "",
    showResults: false,
    results: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    incrementCorrectAnswersCount: (state, action) => {
      const correctAnswersCount =
        action.payload ===
        state.currentTestArray[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    },
    nextQuestion: (state) => {
      const showResults =
        state.currentQuestionIndex === state.currentTestArray.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.currentTestArray[currentQuestionIndex]);

      return {
        ...state,
        currentAnswer: "",
        showResults,
        currentQuestionIndex,
        answers,
      };
    },
    restart: (state) => {
      return {
        ...state,
        currentQuestionIndex: 0,
        showResults: false,
        correctAnswersCount: 0,
      };
    },
    resultsCount: (state, action) => {
      const results = {
        name: state.testById.testName,
        result: state.correctAnswersCount,
      };
      return {
        ...state,
        results,
      };
    },
  },
  extraReducers: {
    [fetchTests.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    },
    [fetchTestById.fulfilled]: (state, action) => {
      return {
        ...state,
        testById: action.payload,
        currentTestArray: action.payload.test,
        isLoading: false,
        error: null,
      };
    },
    [addTests.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTests.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex((task) => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [fetchTests.pending]: handlePending,
    [fetchTestById.pending]: handlePending,
    [addTests.pending]: handlePending,
    [deleteTests.pending]: handlePending,
    [fetchTests.rejected]: handleRejected,
    [fetchTestById.rejected]: handleRejected,
    [addTests.rejected]: handleRejected,
    [deleteTests.rejected]: handleRejected,
  },
});

export const { incrementCorrectAnswersCount } = testsSlice.actions;
export const { nextQuestion } = testsSlice.actions;
export const { restart } = testsSlice.actions;
export const { resultsCount } = testsSlice.actions;

export const TestsReducer = testsSlice.reducer;
