import { deleteWords, getSingleWord, getWords } from '../api/wordsData';
import viewWords from '../pages/viewWords';
import addWordsForm from '../forms/addWordsForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWords(firebaseKey).then(() => {
          getWords(user.uid).then(viewWords); // we call it inside of delete words cause it needs to go in sequence
        });
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-words-btn')) {
      addWordsForm(user.uid);
    }
    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-words-btn')) {
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((bookObj) => addWordsForm(user.uid, bookObj));
    }
  });
};

export default domEvents;
