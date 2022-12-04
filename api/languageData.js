import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguage = () => new Promise((resolve, reject) => {
  console.warn('language trigger');
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getWordsByLanguage = (languageId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="languageId"&equalTo=${languageId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});
export {
  getLanguage,
  getWordsByLanguage
};
