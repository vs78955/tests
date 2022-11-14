// оптимизировать синтаксис фнкции fun в более лаконичный вид

const data = [2, 4, 5, "7", 2, 8, 6];

//обрабатывает массив...
const fun = (n = 0) => {
  //размер массива должен быть меньше n
  if (n <= data.length) {
    //все элементы больше 5 умножаем на 2, а остальные делим на 2
    const data1 = data.map((e) => {
      if (e > 5) {
        return e * 2;
      } else {
        return e / 2;
      }
    });
    const data2 = data1.join("");
    return data2;
  } else {
    return 0;
  }
};

const fun2 = (n = 0) => "...";

console.log(fun(3), fun(9));
console.log(fun2(3), fun2(9));
