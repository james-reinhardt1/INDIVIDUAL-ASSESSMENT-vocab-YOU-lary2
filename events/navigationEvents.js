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

  // document.querySelector('#javascript').addEventListener('click', () => {
  //   getWords(user.uid).then(showWords);
  // });

  // document.querySelector('#html').addEventListener('click', () => {
  //   getWords(user.uid).then(showWords);
  // });

  // document.querySelector('#css').addEventListener('click', () => {
  //   getWords(user.uid).then(showWords);
  // });

  document.querySelector('#favoriteWords').addEventListener('click', () => {
    // first get the words, THEN SHOW words
    filterWords().then(viewWords);
    // console.warn('whats up');
  });
};

export default navigationEvents;
