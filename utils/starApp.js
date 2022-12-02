import { getWords } from '../api/wordsData';
import { showWords } from '../pages/viewWords';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all words on the DOM on App load
  getWords(user.uid).then((words) => showWords(words));
  // whatever you resolve is returned at .then(taco)
};

export default startApp;
