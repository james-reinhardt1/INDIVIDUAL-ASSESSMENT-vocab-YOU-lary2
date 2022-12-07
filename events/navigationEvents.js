import { getWords, filterWords } from '../api/wordsData';
import viewWords from '../pages/viewWords';
import { signOut } from '../utils/auth';
import filterLanguage from '../shared/filter';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(viewWords);
  });
  // CHANGING ALL CALLS FROM NUMBERS TO USER.UID
  // THIS STOPPED MY BUTTONS FROM WORKING
  document.querySelector('#javascript').addEventListener('click', () => {
    filterLanguage(user.uid, 'javaScript');
  });

  document.querySelector('#html').addEventListener('click', () => {
    filterLanguage(user.uid, 'html');
  });

  document.querySelector('#css').addEventListener('click', () => {
    filterLanguage(user.uid, 'css');
  });

  document.querySelector('#favoriteWords').addEventListener('click', () => {
    // first get the words, THEN SHOW words
    filterWords(user.uid).then(viewWords);
    // console.warn('whats up');
  });
};

export default navigationEvents;
