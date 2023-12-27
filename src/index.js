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

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onClick)

function onClick() {
    //
}

function showNotification() {
    refs.notification.classList.add('is-visible')
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}