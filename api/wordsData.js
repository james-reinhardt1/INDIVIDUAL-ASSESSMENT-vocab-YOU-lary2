import client from '../utils/client';

const endpoint = client.databaseURL;

// GET WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
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
// CREATE WORDS
const createWords = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE WORDS
const deleteWords = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// UPDATE WORDS
const updateWords = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but ising it here for consistency
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const filterWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabWords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const wordFilter = Object.values(data).filter((item) => item.languageId);
      resolve(wordFilter);
    })
    .catch(reject);
});

export {
  createWords,
  deleteWords,
  updateWords,
  getSingleWord,
  getWords,
  filterWords
};
