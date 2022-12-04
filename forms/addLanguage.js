import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectLanguage from './selectWordsForm';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-words'}" class="mb-4">
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" aria-describedby="wordTitle" placeholder="Enter Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group" id="select-words">
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(`${obj.firebaseKey || ''}`);
};

export default addLanguageForm;
