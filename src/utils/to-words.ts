const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const valueInWords = (value: number): string => {
  let digit = 0;
  if (value < 20) return `${ones[value]}`;
  if (value < 100) {
    digit = value % 10;
    return `${tens[Math.floor(value / 10) - 2]} ${
      digit > 0 ? ones[digit] : ""
    }`;
  }
  if (value < 1000) {
    return `${ones[Math.floor(value / 100)]} hundred ${
      value % 100 > 0 ? valueInWords(value % 100) : ""
    }`;
  }
  if (value < 100000) {
    return `${valueInWords(Math.floor(value / 1000))} thousand ${
      value % 1000 > 0 ? valueInWords(value % 1000) : ""
    }`;
  }
  if (value < 10000000) {
    return `${valueInWords(Math.floor(value / 100000))} lakh ${
      value % 100000 > 0 ? valueInWords(value % 100000) : ""
    }`;
  }
  return `${valueInWords(Math.floor(value / 10000000))} crore ${
    value % 10000000 > 0 ? valueInWords(value % 10000000) : ""
  }`;
};

export default valueInWords;
