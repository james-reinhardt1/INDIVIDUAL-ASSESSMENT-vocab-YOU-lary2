import { getWords } from '../api/wordsData';
import { getLanguage } from '../api/languageData';
import viewWords from '../pages/viewWords';

const filterLanguage = (uid, taco) => {
  getWords(uid).then((array) => {
    getLanguage(uid).then((lang) => {
      const jimmy = lang.find((item) => item.language === taco);
      const words = array.filter((item) => item.language === jimmy.firebaseKey);
      return words;
    }).then(viewWords);
  });
};

export default filterLanguage;
