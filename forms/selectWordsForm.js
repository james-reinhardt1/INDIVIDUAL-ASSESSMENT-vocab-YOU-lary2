import { getWords } from '../api/wordsData';
import renderToDOM from '../utils/renderToDom';

// Add UID in selectWords and getWords
const selectLanguage = () => {
  let domString = `<label for="language">Select an Language</label>
    <select class="form-control" id="language" required>
    <option value="">Select an Language</option>`;

  getWords().then((wordsArray) => {
    wordsArray.forEach((vocabWords) => {
      domString += `
          <option 
            value="${vocabWords.firebaseKey}"  : ''}>
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-words', domString);
  });
};

export default selectLanguage;
