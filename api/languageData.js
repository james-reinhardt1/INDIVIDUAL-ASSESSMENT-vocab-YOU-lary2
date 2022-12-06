import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguage = (uid) => new Promise((resolve, reject) => {
  console.warn('language trigger');
  fetch(`${endpoint}/language.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
// changed from line 15
const getWordsByLanguage = (uid, taco) => new Promise((resolve, reject) => {
  // changed from languageId to uid in paramater in line 24
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => (Object.values(data)))
    .then((array) => array.filter(
      (vocabObject) => vocabObject.language === taco
    )) // added another .then promise to filter vocab object
    .then(resolve)
    .catch(reject);
});
export {
  getLanguage,
  getWordsByLanguage
};
