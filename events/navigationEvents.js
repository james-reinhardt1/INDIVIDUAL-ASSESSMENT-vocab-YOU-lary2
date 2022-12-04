import { getWordsByLanguage } from '../api/languageData';
import { getWords, filterWords } from '../api/wordsData';
import viewWords from '../pages/viewWords';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords().then(viewWords);
  });

  document.querySelector('#javascript').addEventListener('click', () => {
    getWordsByLanguage(1).then(viewWords);
  });

  document.querySelector('#html').addEventListener('click', () => {
    getWordsByLanguage(3).then(viewWords);
  });

  document.querySelector('#css').addEventListener('click', () => {
    getWordsByLanguage(2).then(viewWords);
  });

  document.querySelector('#favoriteWords').addEventListener('click', () => {
    // first get the words, THEN SHOW words
    filterWords().then(viewWords);
    // console.warn('whats up');
  });
};

export default navigationEvents;
