import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectWords from './selectWordsForm';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordsForm = (obj = {}) => {
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
      <div class="form-group" id="select-words">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectWords(`${obj.firebaseKey || ''}`);
};

export default addWordsForm;
