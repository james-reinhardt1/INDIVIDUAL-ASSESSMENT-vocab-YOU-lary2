import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectLanguage from './selectLanguageForm';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordsForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-words--${obj.firebaseKey}` : 'submit-words'}" class="mb-4">
      <div class="form-group">
        <label for="title">Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Word Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">${obj.languageId || ''}
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.languageId || ''}`);
};

export default addWordsForm;
