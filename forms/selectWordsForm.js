import { getWords } from '../api/wordsData';
import renderToDOM from '../utils/renderToDom';

// Add UID in selectAuthor and getAuthors
const selectWords = (uid, authorId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;

  getWords(uid).then((authorsArray) => {
    authorsArray.forEach((author) => {
      domString += `
          <option 
            value="${author.firebaseKey}" 
            ${authorId === author.firebaseKey ? 'selected' : ''}>
              ${author.first_name} ${author.last_name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-words', domString);
  });
};

export default selectWords;