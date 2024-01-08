import axios from 'axios';
import formTpl from '../templates/questions.hbs';

const list = document.querySelector('.js-list');

function getUsers() {
  const BASE_URL = ' http://localhost:3000';
  const ENDPOINT = 'people';

  return axios.get(`${BASE_URL}/${ENDPOINT}`).then(data => data);
}

getUsers()
  .then((data) => {
      list.innerHTML = formTpl(data);
      console.log(data)
  })
  .catch(console.error);
