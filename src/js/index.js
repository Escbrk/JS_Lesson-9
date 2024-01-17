// const myUser = {
//   name: 'Max',
//   age: 23,
//   phoneNumber: 654654654,
// };

// const name = `{"name": "Mango"}`;

// const str = JSON.stringify(myUser);
// console.log(str);
// console.log(JSON.parse(str));
// console.log(JSON.parse(name));

// const user = {
//   name: 'Paul',
//   age: 27,
//   city: 'Calgary',
// };

// localStorage.setItem('data', JSON.stringify(user))

// const result = JSON.parse(localStorage.getItem('data'))
// console.log(result)

// try {
//   const result = JSON.parse(localStorage.getItem('key1'));
//   console.log(result);
// } catch {
//   console.log('Error');
// }

//?_____________________________________________
// import throttle from 'lodash.throttle';
// import { saveToLS, loadFromLS } from '../helpers/helpers';

// //! ВАРИАНТ БЕЗ ОБЪЕКТА
// // const refs = {
// //   form: document.querySelector('.js-feedback-form'),
// // };
// // afterReload();

// // refs.form.addEventListener('input', throttle(onInput, 500));
// // refs.form.addEventListener('submit', onSubmit);

// // function onInput(e) {
// //   const key = e.target.name;
// //   const value = e.target.value;

// //   saveToLS(key, value);
// // }

// // function afterReload() {
// //   const name = loadFromLS('name');
// //   const message = loadFromLS('message');

// //   refs.form.elements.name.value = name || 'Anonymous';
// //   refs.form.elements.message.value = message;
// // }

// // function onSubmit(e) {
// //   e.preventDefault();
// //   const name = refs.form.elements.name.value;
// //   const message = refs.form.elements.message.value;

// //   const obj = {
// //     name,
// //     message,
// //   };

// //   console.log(obj);

// //   e.target.reset();
// //   localStorage.removeItem('name');
// //   localStorage.removeItem('message');
// // }

// //! ВАРИАНТ С ОБЪЕКТОМ
// const refs = {
//   form: document.querySelector('.js-feedback-form'),
// };

// refs.form.addEventListener('input', throttle(onInput, 500));
// refs.form.addEventListener('submit', onSubmit);

// function onInput() {
//   const name = refs.form.elements.name.value;
//   const message = refs.form.elements.message.value;

//   const obj = {
//     name,
//     message,
//   };
//   saveToLS('formData', obj);
// }

// function afterReload() {
//   const data = loadFromLS('formData');

//   if (data) {
//     refs.form.elements.name.value = data.name;
//     refs.form.elements.message.value = data.message;
//   } else {
//     refs.form.elements.name.value = 'Anonymous';
//   }
// }

// function onSubmit(e) {
//   e.preventDefault();
//   console.log(JSON.parse(localStorage.getItem('formData')));

//   e.target.reset();
//   localStorage.removeItem('formData');
// }
// afterReload();

//?_____________________________________________

//! setTimeout()
// const logger = time =>
//   console.log(`Лог через ${time}ms, потому что не отменили timeout`);

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer)

// if (shouldCancelTimer) {
//     clearTimeout(timerId);
// }

//! setInterval()
// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log('До вызова setInterval');
// const intervalId = setInterval(logger, 2000, 2000);
// console.log('После вызова setInterval');

// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval)
// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }

//?_____________________________________________

// console.log('До вызова setTimeout');
// setTimeout(() => {
//     console.log('Вызов отложенной функции')
// }, 0)
// console.log('После вызова setTimeout');

//?_____________________________________________
//* ОПОВЕЩЕНИЯ
// const NOTIFICATION_DELAY = 3000;
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };
// let timeoutId = null;

// refs.notification.addEventListener('click', onClick);

// showNotification();

// function onClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('is-visible');

//   timeoutId = setTimeout(() => {
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }

//?_____________________________________________
import axios from 'axios';
import * as BSN from 'bootstrap.native';

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         clearInterval(intervalId);
//         return
//     }
//     console.log('Подпишись на рассылку! - ' + Date.now());
//     promptCounter += 1
// }, PROMPT_DELAY);

//?_____________________________________________
// const modal = new BSN.Modal('#exampleModal');

// const refs = {
//   modal: document.querySelector('#exampleModal'),
//   sunscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// let promptCounter = 0;
// let hasSubscribed = false;
// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;

// openModal();

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.sunscribeBtn.addEventListener('click', onSubscribe);

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался!');
//     return;
//   }
//   setTimeout(() => {
//     console.log('Открываем надоедалку!');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribe() {
//   hasSubscribed = true;
//   modal.hide();
// }

//?_____________________________________________

// const date = Date.now()

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log(date)
//   console.log(date2)
//   console.log(date2 - date)
// }, 3000)

//! TIMER

// const refs = {
//   clockface: document.querySelector('.js-clockface'),
//   start: document.querySelector('button[data-action-start]'),
//   stop: document.querySelector('button[data-action-stop]'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);

//     this.onTick(time);
//   }
//   start() {
//     const startTime = Date.now();

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;

//       const time = this.getTimeComponents(deltaTime);
//       this.onTick(time);
//     }, 1000);
//     refs.start.disabled = true;
//   }
//   stop() {
//     clearInterval(this.intervalId);
//     refs.start.disabled = false;

//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   getTimeComponents(time) {
//     const days = this.pad(Math.floor((time / (1000 * 60 * 60 * 24))));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, 0);
//   }
// }

// const timer = new Timer({
//   onTick: updClockface,
// });

// refs.start.addEventListener('click', timer.start.bind(timer));
// refs.stop.addEventListener('click', timer.stop.bind(timer));

// function updClockface({ days, hours, mins, secs }) {
//   refs.clockface.textContent = `Day(s):${days} / Time: ${hours}:${mins}:${secs}`;
// }

//?_____________________________________________

//! PROMISE

// const promise = new Promise((res, rej) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       res('✅ Promise is succesfull');
//     }

//     rej("❌ Promise is't succesfull");
//   }, 1000);
// });

// promise.then(res => console.log(res)).catch(err => console.log(err))

//?_____________________________________________

//! ПРОМИСИФИКАЦИЯ
//*   - Проблема доступа к результату промиса с колбеком
//*   - Функция которая возвращает промис

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((res, rej) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         res(`Вот ваше блюдо: ${dish}`);
//       }
//       rej('Такого блюда нет');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSucces).catch(onMakeOrderError);

// function onMakeOrderSucces(result) {
//   console.log('onMakeOrderSucces ->', result);
// }

// function onMakeOrderError(error) {
//   console.error('onMakeOrderError ->', error);
// }

//?_____________________________________________

/*
 *    Промисификация "синхронных" функций
 *      - Promise.resolve()
 *      - Promise.reject()
 */

// const makeOrder = dish => {
//   return Promise.resolve(`Вот ваше блюдо: ${dish}`);
// };

// makeOrder('пирожок').then(onMakeOrderSucces).catch(onMakeOrderError);

// function onMakeOrderSucces(result) {
//   console.log('onMakeOrderSucces ->', result);
// }

// function onMakeOrderError(error) {
//   console.error('onMakeOrderError ->', error);
// }

//?_____________________________________________
//! FETCH

// const fetchPokemonById = id => {
//   const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
//   return fetch(`${BASE_URL}/${id}`).then(x => x.json());
// };

// fetchPokemonById(6)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// fetchPokemonById(10)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// fetchPokemonById(16)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// fetchPokemonById(60)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

//?_____________________________________________

// const makePromise = () =>
//   new Promise((res, rej) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         res('Resolve');
//       }
//       rej('Nope');
//     }, 2000);
//   });
// makePromise()
//   .then(result => console.log(result))
//   .catch(err => console.error(err));

//?_____________________________________________

//! RACETRACK

// const refs = {
//   startBtn: document.querySelector('.js-start-btn'),
//   winner: document.querySelector('.js-winner'),
//   progress: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };
// let raceCounter = 0;

// refs.startBtn.addEventListener('click', startRace);

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];
// function startRace() {
//   raceCounter += 1
//   const promises = horses.map(run);

//   updWinner('');
//   updProgress('🤖 Заезд начался, ставки не принимаются!');

//   determineWinner(promises);
//   waitForAll(promises);
// }
// function run(horse) {
//   return new Promise((res, rej) => {
//     const time = getRandomeTime(2000, 3500);

//     setTimeout(() => {
//       res({ horse, time });
//     }, time);
//   });
// }
// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updWinner(`🏅 Победил ${horse}, финишировав за ${time} времени`);
//     updResult({ horse, time, raceCounter });
//   });
// }
// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() =>
//     updProgress('🔚 Заезд окончен, принимаются ставки')
//   );
// }
// function updResult({ horse, time, raceCounter }) {
//   const tr = `
//   <tr>
//       <td>${raceCounter}</td>
//       <td>${horse}</td>
//       <td>${time}</td>
//   </tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }
// function getRandomeTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function updProgress(message) {
//   refs.progress.textContent = message;
// }
// function updWinner(message) {
//   refs.winner.textContent = message;
// }

/*
 *    Promise.race([]) для ожидания первого выполнившегося промиса
 */

// Promise.race(promises).then(({ horse, time }) =>
//   console.log(
//     `%c🏅 Победил ${horse}, финишировав за ${time} времени`,
//     'color: green; font-size: 14px'
//   )
// );

// /*
//  *    Promise.all([]) для ожидания всех промисов
//  */

// Promise.all(promises).then(() =>
//   console.log(
//     '%c🔚 Заезд окончен, принимаются ставки',
//     'color: blue; font-size: 14px'
//   )
// );

//?_____________________________________________

// const id = setTimeout(() => {
//   console.log('done')
// }, 1000)

//! setTimeout(callback, time, [...args])
//? clearTimeout()

// const id = setTimeout((name, country) => {
//   console.log(`Hello my name is ${name}, i'm from ${country}`)
// }, 1000, 'Paul', 'Canada')

//! setInterval(callback, time, [...args])
//? clearInterval()

// const id = setInterval(() => {
//   console.log('setInterval');

//   setTimeout(() => {
//     clearInterval(id);
//   }, 5000);
// }, 1000);

//?_____________________________________________

// ! Продам Гараж
// const refs = {
//   content: document.querySelector('.js-content'),
//   time: document.querySelector('.js-text'),
// };

// let counter = 10;
// refs.time.textContent = `Осталось ${counter} секунд`;

//! v1
// const id = setInterval(() => {
//   counter -= 1;

//   refs.time.textContent = `Осталось ${counter} секунд`;

//   if (counter <= 0) {
//     clearInterval(id);
//     refs.content.style.display = 'none'
//   }
// }, 1000);

//! v2
// const id = setInterval(() => {
//   counter -= 1;
//   refs.time.textContent = `Осталось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id)
//   refs.content.style.display = 'none';
// }, counter * 1000)

//?_____________________________________________

// setInterval(() => {
//   const currentDate = Date.now();
//   const targetDate = new Date('Dec 31 2023');
//   const result = targetDate - currentDate;

//   console.log(result);
// }, 1000);

//?_____________________________________________

// const promise = new Promise((res, rej) => {
//   const rand = Math.random();

//   setTimeout(() => {
//     if (rand < 0.5) {
//       res('✅');
//     } else {
//       rej('❌');
//     }
//   }, 0);
// });

// promise
//   .then(data => console.log(`Then block. Result: ${data}`))
//   .catch(err => console.error(`Catch block. Result: ${err}`))
//   .finally(() => console.log('Finally block'));

//?____________________________________________
//! ИГРОВОЙ АВТОМАТ

// import 'basiclightbox/dist/basicLightbox.min.css';
// import * as basicLightbox from 'basiclightbox';

// const refs = {
//   startBtn: document.querySelector('.js-start'),
//   container: document.querySelector('.js-container'),
// };

// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   refs.startBtn.disabled = true;
//   // const promises = [...refs.container.children].map(() => promiseFn());
//   const promises = [...refs.container.children].map(promiseFn);

//   Promise.allSettled(promises).then(items => {
//     const isWinner =
//       items.every(({ status }) => status === 'fulfilled') ||
//       items.every(({ status }) => status === 'rejected');

//     items.forEach((item, i) => {
//       refs.container.children[i].textContent = '';

//       setTimeout(() => {
//         refs.container.children[i].textContent = item.value || item.reason;

//         if (i === items.length - 1) {
//           const instance = basicLightbox.create(
//             `<h1>${isWinner ? 'Winner' : 'Loser'}</h1>`
//           );

//           instance.show();
//           refs.startBtn.disabled = false;

//           // setTimeout(() => {
//           //   if (isWinner) alert('WINNER');
//           // }, 1000)
//         }
//       }, 1000 * (i + 1));
//     });
//   });
// }

// function promiseFn() {
//   return new Promise((res, rej) => {
//     const rand = Math.random();

//     if (rand > 0.5) {
//       res('🤑');
//     }
//     rej('😈');
//   });
// }

//?____________________________________________

/*
 *    - HTTP-Запросы в браузере
 *      - Fetch API
 *      - Вкладка Network
 *      - HTTP-методы
 *      - Заголовки
 *      - MIME-типы
 *      - Параметры запроса
 *    - Документация REST API
 *    - Обработка 404 с fetch
 *    - Аутентификация
 *    - Библиотеки-обертки
 *    - https://pokeapi.co
 */

// import pokemonCardTpl from '../pokemon-cards.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.container.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Ups, something went wrog(');
// }

//!===========================
// const URL = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };
// fetch(URL, options)
//   .then(r => r.json())
//   .then(console.log);

// 4330ebfabc654a6992c2aa792f3173a3

// !===========================
//! Pagination
// import NewsApiService from './news-service';
// import articlesTpl from '../templates/articles.hbs';
// import LoadMore from './load-more-btn';

// const newsApiService = new NewsApiService();
// const loadMoreBtn = new LoadMore({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

// const refs = {
//   searchForm: document.querySelector('.js-search-form'),
//   container: document.querySelector('.js-articles-container'),
// };

// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     return alert('Введи что-то нормальное!!!');
//   }
//   clearArticlesContainer();
//   newsApiService.resetPage();
//   loadMoreBtn.show();
//   fetchArticles();
// }

// function appendArticlesMarkup(articles) {
//   refs.container.insertAdjacentHTML('beforeend', articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.container.innerHTML = '';
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then(articles => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }
//! Pagination

// !===========================
//* Симак

// const URL = 'https://rickandmortyapi.com/api/character';

// fetch(URL)
//   .then(response => {
//     if (!response.ok) {
//       //*or "!status.ok"
//       throw new Error('404 - Not Found!');
//     }
//     return response.json();
//   })
//   .then(({ results }) => console.log(results))
//   .catch(console.error);

// !===========================
// import forecastTpl from '../templates/forecast.hbs';
// import '../../node_modules/izitoast/dist/css/iziToast.min.css'
// import iziToast from 'izitoast';

// const refs = {
//   form: document.querySelector('.js-search-form'),
//   list: document.querySelector('.js-list'),
//   cityName: document.querySelector('.js-city-name'),
// };

// refs.form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const { days, city } = form.elements;
//   fetchForecast(city.value, days.value)
//     .then(({ forecast, location: { name, country } }) => {
//       refs.cityName.textContent = `${name}, ${country}`;
//       refs.list.innerHTML = forecastTpl(forecast);
//     })
//     .catch(err => {
//       refs.cityName.textContent = '';
//       refs.list.innerHTML = '';
//       iziToast.show({
//         message: `${err}`,
//         color: 'red',
//         position: 'topCenter'
//       });
//     })
//     .finally(() => form.reset());
// }

// function fetchForecast(city, days) {
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const ENDPOINT = 'forecast.json';

//   const params = new URLSearchParams({
//     key: '66f9e81543404d02beb160521230808',
//     q: city,
//     days,
//     lang: 'ru',
//   });

//   return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error('404 - Not Found!');
//     }

//     return response.json();
//   });
// }

//* Альтернативный вариант
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         date,
//         day: {
//           avgtemp_c,
//           condition: { text, icon },
//         },
//       }) => `
//           <li>
//       <img src="${icon}" alt="${text}" />
//       <h2>${date}</h2>
//       <h3>${text}</h3>
//       <h3>${avgtemp_c}</h3>
//     </li>
//     `
//     )
//     .join('');
// }

// !===========================

// https://developer.themoviedb.org/reference/trending-movies

// 92a9a9e3708a3e9451b7037d5906879a
// d0f00e3970f1028763a1388502d0f412

// https://developer.themoviedb.org/docs/image-basics

// https://api.themoviedb.org/3/trending/movie/week?api_key=d0f00e3970f1028763a1388502d0f412&page=500

// import MovieApiServise from './movie-service';
// const movieApiService = new MovieApiServise()

// import axios from 'axios';
// import moviesTpl from '../templates/movies.hbs';

// const refs = {
//   movieList: document.querySelector('.js-movie-list'),
//   //   btnContainer: document.querySelector('.button-container'),
//   loadMore: document.querySelector('.js-load-more'),
// };

// let pageCounter = 1;

// const classes = {
//   loadMoreHidden: 'load-more-hidden',
// };

// function fetchMovies() {
//   const BASE_URL = 'https://api.themoviedb.org/3';
//   const ENDPOINT = 'trending/movie/week';

//   const params = new URLSearchParams({
//     api_key: 'd0f00e3970f1028763a1388502d0f412',
//     page: pageCounter,
//   });

//   //   return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then(response => {
//   //     if (!response.ok) {
//   //       throw new Error(response.statusText);
//   //     }

//   //     return response.json();
//   //   });

//   return axios
//     .get(`${BASE_URL}/${ENDPOINT}?${params}`)
//     .then(({ data }) => data);
// }

// function onClick() {
//   pageCounter += 1;
//   refs.loadMore.disabled = true;

//   fetchMovies()
//     .then(data => {
//       refs.movieList.insertAdjacentHTML('beforeend', moviesTpl(data));
//       refs.loadMore.disabled = false;

//       if (data.page >= 500) {
//         refs.loadMore.classList.add(classes.loadMoreHidden);
//         refs.loadMore.removeEventListener('click', onClick);

//         return;
//       }
//     })
//     .catch(console.log);
// }

// fetchMovies()
//   .then(data => {
//     refs.movieList.innerHTML = moviesTpl(data);

//     if (data.page < data.total_pages && data.page < 500) {
//       refs.loadMore.classList.remove(classes.loadMoreHidden);
//       refs.loadMore.addEventListener('click', onClick);
//     }
//   })
//   .catch(console.log);

// !===========================
//! BACKEND
//* GET

// const BASE_URL = 'http://localhost:3000';
// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// function fetchBookById(id) {
//   return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
// }

// fetchBooks();
// fetchBookById(2);

//* POST

// function addNewBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options)
//     .then(res => res.json())
//     .then(console.log);
// }

// addNewBook({
//   title: 'Test book CSS',
//   author: 'Me',
//   genres: ['CSS'],
//   rating: 9,
// });

// addNewBook({
//   title: 'Test book HTML',
//   author: 'Me',
//   genres: ['HTML'],
//   rating: 7,
// });

//* PUT / PATCH

// function updateBookById(update, id) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
// }

// updateBookById({ title: 'The BIG new book NODE.JS' }, 10);

// updateBookById({ rating: 1 }, 11);

// updateBookById({ rating: 2, author: 'Mango' }, 7);

//* DELETE

// function removeBook(id) {
//   const url = `${BASE_URL}/books/${id}`;
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(url, options).then(res => res.json());
// }

// removeBook(10);
// removeBook(11);

// !===========================
//* try...catch

// try {
//   console.log('Внутри try до myVar');

//   myVar;

//   console.log('Внутри try после myVar');
// } catch {
//   console.error(error);
// }
// console.log('После try...catch');

// !===========================

// const validJSON = '{ "name": "mango", "age": 3 }';
// const invalidJSON = '{ backend вернул вот такое чудо }';

// try {
//   console.log(1);
//   // console.log(JSON.parse(validJSON))
//   console.log(JSON.parse(invalidJSON));
//   console.log(2);
// } catch (error) {
//   console.log(error);
//   if (error.name === 'SyntaxError') {
//     console.log('Ошибка парса JSON');
//   }
// }

// console.log('после error')

// !===========================
//* ASYNC / AWAIT

// async function fn() {
//   //
// }

// const fn = async function () {
//   //
// };

// const arr = async () => {
//   //
// };

// const x = {
//   async getName() {
//     //
//   },
// };

// class X = {
//     async getName() {
//         //
//     }
// }

// ?===========================

// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝',
//     apple: '🍎',
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500)
//   );
// }

// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');

//     const fruits = await Promise.all([apple, kiwi]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function makeSmoothie() {
//     getFruit('apple').then(apple => {
//         console.log(apple)

//         getFruit('kiwi').then(console.log)
//     });

// }

// aMakeSmoothie().then(console.log)

// !===========================

// const BASE_URL = 'http://localhost:3000';

// async function fetchBooks() {
//   const response = await fetch(`${BASE_URL}/books`);
//   return await response.json();
// }

// async function fetchBookById(id) {
//   const response = await fetch(`${BASE_URL}/books/${id}`);
//   return await response.json();
// }

// async function addNewBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   const response = await fetch(`${BASE_URL}/books`, options);
//   return await response.json();
// }

// async function addBookAndUpdateUI() {
//   try {
//     const book = await addNewBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function removeBook(id) {
//   const url = `${BASE_URL}/books/${id}`;
//   const options = {
//     method: 'DELETE',
//   };

//   return await fetch(url, options);
// }

// async function updateBookById(update, id) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = await fetch(`${BASE_URL}/books/${id}`, options);
//   return await response.json();
// }

// async function addAndRenderBook() {
//   try {
//     const book = await addNewBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }

// !===========================
//! CRUD
//* Симак

// const URL = 'https://jsonplaceholder.typicode.com/posts';

//  ******************** CREATE - POST ********************

// const newPost = {
//   userID: 777,
//   title: 'My NEW POST',
//   body: 'qweqwe',
// };

// fetch(URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify([newPost, newPost2]),
// }).then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// axios.post(URL, newPost).then(console.log).catch(console.log);
//  ******************** READ - GET ********************

// fetch(URL)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// axios.get(URL).then(response => console.log(response.data)).catch(console.log);

//  ******************** UPDATE - PATCH ********************

// const updatedPost = {
//   title: 'My NEW POST updated',
// };

// fetch(`${URL}/${1}`, {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(updatedPost),
// })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// axios.patch(`${URL}/${1}`, updatedPost).then(console.log).catch(console.log);

//  ******************** UPDATE - PUT ********************

// fetch(`${URL}/${1}`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(updatedPost),
// })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// axios.put(`${URL}/${1}`, updatedPost).then(console.log).catch(console.log);

//  ******************** DELETE - DELETE ********************

// fetch(`${URL}/${1}`, {
//   method: 'DELETE',
// })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// axios.delete(`${URL}/${1}`, updatedPost).then(console.log).catch(console.log);

// !===========================
// import getUsers from './questions';

// const form = document.querySelector('.js-question');

// form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   const { userName, phone, email, question } = e.currentTarget.elements;

//   const userData = {
//     name: userName.value,
//     phone: phone.value,
//     email: email.value,
//     comment: question.value,
//   };
//   console.log(userData);

//   createQuestionService(userData)
//     .then(data => alert('Thx'))
//     .catch(console.error)
//     .finally(() => form.reset());
// }

// function createQuestionService(data) {
//   const BASE_URL = ' http://localhost:3000';
//   const ENDPOINT = 'people';

//   return axios
//     .post(`${BASE_URL}/${ENDPOINT}`, data)
//     .then(data => console.log(data));
// }

// function deletePostById(id) {
//   return axios.delete(`http://localhost:3000/people/${id}`);
// }

// !===========================
//* FETCH

// function serviceCountry(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

// serviceCountry('Canada').then(console.log).catch(console.log);

// ?===========================
//* ASYNC / AWAIT

// async function serviceCountry(name) {
//   const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return await response.json();
// }

// serviceCountry('Canada').then(console.log).catch(console.log);

// ?===========================
//* AXIOS - ASYNC / AWAIT

// async function serviceCountry(name) {
//     const { data } = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

//     return data
// }
// serviceCountry('Canada').then(console.log).catch(console.log);

// ?===========================
// ****** Arrow function ****** \\

// const serviceCountry = async name => {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// };

// serviceCountry('Canada').then(console.log).catch(console.log);

// ?===========================
// ****** Function expression ****** \\

// const serviceCountry = async function (name) {
//   const { data } = await axios.get(
//     `https://restcountries.com/v3.1/name/${name}`
//   );

//   return data;
// };

// serviceCountry('Canada').then(console.log).catch(console.log);

// ?===========================
// ****** Object method ****** \\

// const obj = {
//   counryName: 'Canada',
//   async serviceCountry() {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/name/${this.counryName}`
//     );

//     return data;
//   },
// };

// ****** Обработка ошибок с помощью then/catch ******

// async function serviceCountry(name) {
//   const data = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

//   return data;
// }

// serviceCountry('Canada').then(console.log).catch(console.error);

// ****** Обработка ошибок с помощью try/catch ******

//! FETCH
// async function serviceCountry(name) {
//   try {
//     const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

// serviceCountry('Canada').then(console.log)

//! AXIOS
// async function serviceCountry(name) {
//   try {
//     const data = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

//     return data;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// serviceCountry('Canada').then(console.log);

// ****** Последовательные запросы ******

// async function serviceCountry() {
//   try {
//     const canada = await axios.get(
//       `https://restcountries.com/v3.1/name/canada`
//     );
//     console.log(canada.data);

//     const france = await axios.get(
//       `https://restcountries.com/v3.1/name/france`
//     );
//     console.log(france.data);

//     const germany = await axios.get(
//       `https://restcountries.com/v3.1/name/germany`
//     );
//     console.log(germany.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// serviceCountry().then(console.log);

// ****** Паралельные запросы ******

// async function serviceCountry() {
//   try {
//     const countryArr = ['canada', 'france', 'germany'];

//     return countryArr.map(async country => {
//       const { data } = await axios.get(
//         `https://restcountries.com/v3.1/name/${country}`
//       );
//       return data;
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// serviceCountry().then(console.log);

// ?===========================

// API KEY: 66f9e81543404d02beb160521230808

// import weatherTpl from '../templates/weather.hbs';

// const refs = {
//   form: document.querySelector('.js-search'),
//   container: document.querySelector('.js-form-container'),
//   list: document.querySelector('.js-list'),
//   addCountry: document.querySelector('.js-add'),
// };

// refs.addCountry.addEventListener('click', addCountryField);
// refs.form.addEventListener('submit', onSubmit);

// async function onSubmit(e) {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);
//   const countries = formData
//     .getAll('country')
//     .map(country => country.trim())
//     .filter(country => country);

//   try {
//     const capitals = await serviceCountries(countries);
//     const weather = await serviceWeather(capitals);

//     refs.list.innerHTML = createMarkup(weather);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     refs.container.innerHTML = '<input type="text" name="country">';
//   }
// }

// function addCountryField() {
//   refs.container.insertAdjacentHTML(
//     'beforeend',
//     '<input type="text" name="country">'
//   );
// }

// async function serviceCountries(countries) {
//   const resps = countries.map(async country => {
//     const { data } = await axios.get(
//       `https://restcountries.com/v3.1/name/${country}`
//     );

//     return data;
//   });

//   const results = await Promise.allSettled(resps);
//   return results
//     .filter(({ status }) => status === 'fulfilled')
//     .map(({ value }) => value[0].capital[0]);
// }

// async function serviceWeather(capitals) {
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const ENDPOINT = 'forecast.json';
//   const API_KEY = '66f9e81543404d02beb160521230808';

//   const resps = capitals.map(async capital => {
//     const { data } = await axios.get(
//       `${BASE_URL}/${ENDPOINT}?key=${API_KEY}&q=${capital}&lang=ru`
//     );

//     return data;
//   });

//   const results = await Promise.allSettled(resps);
//   return results
//     .filter(({ status }) => status === 'fulfilled')
//     .map(({ value: { current, location, forecast } }) => {
//       const {
//         temp_c,
//         condition: { text, icon },
//       } = current;
//       const { country, name } = location;
//       const { forecastday } = forecast;
//       const date = forecastday[0].date;
//       return { temp_c, text, icon, country, name, date };
//     });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         temp_c,
//         text,
//         date,
//         icon,
//         country,
//         name,
//       }) => `  <li class='weather-card'>
//     <img src='${icon}' alt='${text}' class='weather-icon' />
//     <h2>${name}, ${country}</h2>
//     <h2>${date}</h2>
//     <h3 class="weather-text">${text}</h3>
//     <h3 class="temperature">${temp_c}</h3>
//   </li>`
//     )
//     .join('');
// }

// ?===========================

// import axios from 'axios';

// const fetchTodos = () => {
//   return fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => data);
// };

// fetchTodos()
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

// axios
//   .get('https://jsonplaceholder.typicode.com/todos')
//   .then(response => console.log(response.data)).catch(e => console.error(e))

// const fetchTodos2 = async () => {
//   try {
//     return (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
//   } catch (err) {
//     console.error(err);
//   }
// };

// fetchTodos2()
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

// ?===========================

// const refs = {
//   searchForm: document.querySelector('.search-form'),
//   cardContainer: document.querySelector('.card-container'),
// };

// async function fetchPokemon(id) {
//   return (await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`)).json();
// }

// refs.searchForm.addEventListener('submit', onSubmit);

// async function onSubmit(e) {
//   e.preventDefault();

//   const form = e.currentTarget
//   const searchQuery = form.elements.query.value;

//   try {
//     const foundPokemon = await fetchPokemon(searchQuery);
//     renderPokemonCard(foundPokemon);
//   } catch (error) {
//     alert(error);
//   } finally {
//     form.reset();
//   }
// }

// function renderPokemonCard({ name, sprites, weight, height, abilities }) {
//   const abilityListItems = abilities.reduce(
//     (html, {ability}) => html + `<li class="list-group-item">${ability.name}</li>`, ''
//   );

//   const markup = `    <div class="card" style="width: 300px">
//       <div class="card-img-top">
//         <img src="${sprites.front_default}" alt="${name}">
//       </div>
//       <div class="card-body">
//         <h2>Name: ${name}</h2>
//         <p class="card-text">Weight: ${weight}</p>
//         <p class="card-text">Height: ${height}</p>

//         <p class="card-text"><b>Skills:</b></p>
//         <ul class="list-group">${abilityListItems}</ul>
//       </div>
//     </div>`;
//   refs.cardContainer.innerHTML = markup;
// }

// ?===========================
// import axios from 'axios';

// const refs = {
//   bookList: document.querySelector('.books-list'),
//   form: document.querySelector('.create-book-form'),
// };

// const instance = axios.create({
//   baseURL: 'http://localhost:3000/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const getAxiosData = response => response.data;

// const createRequest = async (endpoint, config = {}) => {
//   config.headers = {
//     'Content-Type': 'application/json',
//     ...config.headers,
//   };

//   const response = await fetch(BASE_URL + endpoint, config);

//   if (!response.ok) {
//     throw new Error(`Request isn't ok: ${response.statusText}`);
//   }

//   return response.json();
// };

// const getBooks = async () => getAxiosData(await instance.get('book'));

// const createBook = async book =>
//   getAxiosData(await instance.post('book', book));

// const updateBook = async book =>
//   getAxiosData(await instance.patch(`book/${book.id}`, book));

// const deleteBook = async id =>
//   getAxiosData(await instance.delete(`book/${id}`));

// instance
//   .get('book')
//   .then(response => console.log(response.data))
//   .catch(console.log());

// instance.patch('book/16', {
//   name: 'Walk Like an Egyptian',
//   author: 'Mrs. Denise Olson',
//   titleImage: 'https://loremflickr.com/640/480',
//   price: '100.00',
//   pointer: '200',
// });

// const render = async () => {
//   try {
//     const books = await getBooks();

//     const booksHTML = books.reduce(
//       (html, { id, name, author, pointer, price, titleImage }) =>
//         html +
//         `
//       <div class="book" data-bookId="${id}">
//           <img src="${titleImage}" alt="${name}" />
//           <p class="name">${name}</p>
//           <p class="author">${author}</p>
//           <p class="price">$${Number(price)}</p>
//           <div class="pointer">
//             <input name="pointer" type="number" value="${pointer}" placeholder="Book pointer" />
//             <button type="submit" class="save-pointer" data-id="${id}">Save</button>
//           </div>
//           <button type="button" class="delete" data-id="${id}">X</button>
//       </div>`,
//       ''
//     );

//     refs.bookList.innerHTML = booksHTML;
//   } catch (error) {
//     console.error(error);
//   }
// };

// render();

// refs.bookList.addEventListener('click', e => {
//   const element = e.target;

//   handleDeleteBtn(element);
//   saveBtn(element);
// });

// async function handleDeleteBtn(element) {
//   if (!element.classList.contains('delete')) return;

//   const bookId = element.dataset.id;

//   try {
//     const { id } = await deleteBook(bookId).then(({ id }) => {
//       if (id) document.querySelector(`.book [data-bookId="${id}"]`).remove();

//       render();
//     });
//   } catch (error) {
//     if (axios.isAxiosError(error)) alert(error.response.statusText);
//     // axios.isAxiosError(error) && alert(error.response.statusText);
//   }
// }

// async function saveBtn(element) {
//   if (!element.classList.contains('save-pointer')) return;

//   const bookId = element.dataset.id;
//   const pointerInput = document.querySelector(
//     `.book[data-bookId="${bookId}"] input[name="pointer"]`
//   );

//   const updatedBook = await updateBook({
//     id: bookId,
//     pointer: pointerInput.value,
//   });

//   alert(`Book "${updatedBook.name}" is updated`);
// }

// refs.form.addEventListener('submit', postNewBook);

// async function postNewBook(e) {
//   e.preventDefault();
//   // const { name, author, price, titleImage, pointer } = refs.form.elements;
//   // createBook({
//   //   name: name.value,
//   //   price: price.value,
//   //   titleImage: titleImage.value,
//   //   author: author.value,
//   //   pointer: pointer.value,
//   // })
//   //   .then(render)
//   //   .finally(() => e.target.reset());

//   const formData = new FormData(e.currentTarget);

//   const book = {};

//   formData.forEach((value, key) => (book[key] = value));

//   const createdBook = await createBook(book);

//   render(createdBook);
//   e.target.reset();
// }

// instance.interceptors.request.use(
//   config => {
//     console.log(`${config.method} ${config.url}`)
//     console.log(config)
//     return config
//   });

// ?===========================
