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

const refs = {
  startBtn: document.querySelector('.js-start-btn'),
  winner: document.querySelector('.js-winner'),
  progress: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};
let raceCounter = 0;

refs.startBtn.addEventListener('click', startRace);

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];
function startRace() {
  raceCounter += 1
  const promises = horses.map(run);

  updWinner('');
  updProgress('🤖 Заезд начался, ставки не принимаются!');

  determineWinner(promises);
  waitForAll(promises);
}
function run(horse) {
  return new Promise((res, rej) => {
    const time = getRandomeTime(2000, 3500);

    setTimeout(() => {
      res({ horse, time });
    }, time);
  });
}
function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updWinner(`🏅 Победил ${horse}, финишировав за ${time} времени`);
    updResult({ horse, time, raceCounter });
  });
}
function waitForAll(horsesP) {
  Promise.all(horsesP).then(() =>
    updProgress('🔚 Заезд окончен, принимаются ставки')
  );
}
function updResult({ horse, time, raceCounter }) {
  const tr = `
  <tr>
      <td>${raceCounter}</td>
      <td>${horse}</td>
      <td>${time}</td>
  </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
function getRandomeTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function updProgress(message) {
  refs.progress.textContent = message;
}
function updWinner(message) {
  refs.winner.textContent = message;
}

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
