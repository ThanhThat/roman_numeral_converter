// function chuyen doi so thanh so la ma
const convertToRoman = (num, romanNumerals) => {
  let result = "";

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
};

(() => {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const numElement = document.getElementById("num");
  const btnConvert = document.getElementById("btn-convert");
  const result = document.querySelector(".result");
  const formElem = document.getElementById("form-convert");

  if (!numElement || !btnConvert || !result || !formElem) return false;

  formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    let num = +numElement.value;

    result.textContent = "Result: " + convertToRoman(num, romanNumerals);
  });
})();
