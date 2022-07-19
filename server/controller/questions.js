require('dotenv').config();
const axios = require('axios');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: process.env.TOKEN,
  },
};

module.exports.getQuestions = (id, cb) => {
  axios.get(`${options.url}qa/questions?product_id=${id}`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting questions info: ', err);
    });
};

module.exports.getAnswers = (qid, cb) => {
  axios.get(`${options.url}qa/questions/${qid}/answers`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting questions info: ', err);
    });
};
