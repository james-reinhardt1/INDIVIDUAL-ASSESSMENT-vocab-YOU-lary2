import { getWords } from '../api/wordsData';
import renderToDOM from '../utils/renderToDom';

// Add UID in selectAuthor and getAuthors
const selectWords = () => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getWords().then((wordsArray) => {
    wordsArray.forEach((words) => {
      domString += `
          <option 
            value="${words.firebaseKey}" : ''}>
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-words', domString);
  });
};

export default selectWords;
