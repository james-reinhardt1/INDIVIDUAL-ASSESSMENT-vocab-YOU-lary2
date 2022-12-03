import { deleteWords, getWords } from '../api/wordsData';
import viewWords from '../pages/viewWords';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWords(firebaseKey).then(() => {
          getWords().then(viewWords); // we call it inside of delete words cause it needs to go in sequence
        });
      }
    }
  });
};

export default domEvents;
