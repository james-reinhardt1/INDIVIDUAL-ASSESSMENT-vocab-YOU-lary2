import getLanguage from '../api/languageData';
import renderToDOM from '../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select an Language</label>
    <select class="form-control" id="language" required>
    <option value="">Select an Language</option>`;

  getLanguage().then((vocabWordsArray) => {
    vocabWordsArray.forEach((vocabWord) => {
      domString += `
          <option 
            value="${vocabWord.languageId}>
            ${languageId === vocabWord.languageId} ? 'selected' : ''}>
              ${vocabWord.title} 
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
