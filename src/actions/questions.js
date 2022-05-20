import { saveQuestion, saveQuestionAnswer } from '../data/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({ ...question, author: authedUser }).then(
      (question) => {
        dispatch(addQuestion(question));
      }
    );
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestionAnswer(answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    answer,
  };
}

export function handleAddQuestionAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer(authedUser, qid, answer).then((answer) => {
      dispatch(addQuestionAnswer(answer));
    });
  };
}
