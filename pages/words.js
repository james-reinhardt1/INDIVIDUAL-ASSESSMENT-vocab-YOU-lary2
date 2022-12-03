import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewWords = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-words-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-words--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h4>${obj.title}</h5>
      <h5>${obj.dateSubmitted}</h5>
      <h6>${obj.language}</h6>
     <p>${obj.definition || ''}</p>
     <p>${obj.favorite ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> favorite</span> 
       $${obj.price}` : `$${obj.price}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewWords;
