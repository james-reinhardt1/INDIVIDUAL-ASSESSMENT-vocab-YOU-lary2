import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

// const emptyWords = () => {
//   const domString = '<h1>No Words</h1>';
//   renderToDOM('#store', domString);
// };

const viewWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-words-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h4 class="card-title">${item.title}</h4>
            <h6 class="card-title">${item.definition}</h6>
            <p class="card-text bold">${item.time ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Favorite</span></p>
            <p> ${item.dateSubmitted}` : `${item.dateSubmitted}`}</p> 
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-words-btn--${item.firebaseKey}"></i>
            <i id="edit-words-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-words-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default viewWords;
