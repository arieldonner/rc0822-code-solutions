let currentCount = 3;
const intervalID = setInterval(() => {
  if (currentCount >= 1) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
