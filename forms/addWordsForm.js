import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import selectWords from './selectWordsForm';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addWordsForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-words--${obj.firebaseKey}` : 'submit-words'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Word Description" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="date">Date Submitted</label>
        <input type="url" class="form-control" id="dateSubmitted" placeholder="Date Submitted" value="${obj.dateSubmitted || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectWords(user, `${obj.firebaseKey || ''}`);
};

export default addWordsForm;
