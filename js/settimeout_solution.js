//сделать таймер, который ускоряется на 100мс от 1 сек, отображая счётчик срабатываний начиная от 0 до 9

function timer(startTime = 1000, counter = 0) {
  setTimeout(() => {
    console.log(counter);
    if (counter >= 9) return;
    timer(startTime - 100, counter + 1);
  }, startTime);
}

timer();
