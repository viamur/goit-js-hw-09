import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const { delay, step, amount } = form.elements;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    let delayAndStep = Number(delay);
    let positiOns = Number(position);

    const IntervalId = setTimeout(() => {
      positiOns += 1;

      const shouldResolve = Math.random() > 0.3;

      // if (positiOns + amount.value >= amount.value) {
      //   position = 0;
      //   clearTimeout(IntervalId);
      //   return;
      // }
      if (shouldResolve) {
        resolve({ positiOns, delayAndStep });
      } else {
        reject({ positiOns, delayAndStep });
      }
      delayAndStep += Number(step.value);
    }, delayAndStep);
  });
}

const onCreatePromises = e => {
  e.preventDefault();

  createPromise(3, delay.value)
    .then(({ positiOns, delayAndStep }) => {
      console.log(`✅ Fulfilled promise ${positiOns} in ${delayAndStep}ms`);
    })
    .catch(({ positiOns, delayAndStep }) => {
      console.log(`❌ Rejected promise ${positiOns} in ${delayAndStep}ms`);
    });
};

form.addEventListener('submit', onCreatePromises);
