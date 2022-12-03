import { createWords, getWords, updateWords } from '../api/wordsData';
import viewWords from '../pages/viewWords';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        favorite: document.querySelector('#favorite').checked,
      };

      createWords(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWords(patchPayload).then(() => {
          getWords().then(viewWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE WORD', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey
      };

      updateWords(payload).then(() => {
        getWords().then(viewWords);
      });
    }
  });
};

export default formEvents;
