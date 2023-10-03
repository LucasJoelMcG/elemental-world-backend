const fs = require('firebase-admin');
const serviceAccount = require('../configs/firebase-admin');

fs.initializeApp({
  credential: fs.credential.cert(serviceAccount)
});
console.log(serviceAccount)
const db = fs.firestore();

const getOne = async (collection, document) => {
  const result = await db.collection(collection).doc(document).get();
  if (result.exists) {
    return result.data();
  }
  else {
    return null;
  }
}

const set = () => {

}

const update = () => {

}

const del = () => {

}

module.exports = { getOne, set, update, del }