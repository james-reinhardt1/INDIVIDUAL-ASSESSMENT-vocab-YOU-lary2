/* eslint-disable radix */
import { getLanguage } from '../api/languageData';
import renderToDOM from '../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select an Language</label>
    <select class="form-control" id="languageId" required>
    <option value="">Select an Language</option>`;

  getLanguage().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.id}"
            ${languageId === parseInt(language.id) ? 'selected' : ''}>
              ${language.language} 
          </option>`;
    });
    // parseInt turns number string into a number. both needed to be numbers or else selected would never be true
    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
