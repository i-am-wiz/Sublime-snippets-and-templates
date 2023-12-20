'use strict'

const fs = require("fs");

function* generateTokenizer(s) {
  //generator function which yields the next token from the input stream stored in s
  let token = '';
  let ind = 0, len = s.length;
  while (ind < len) {
    while (ind < len && (s[ind] == ' ' || s[ind] == '\n')) {
      ++ind;
    }
    while (ind < len && (s[ind] != ' ' && s[ind] != '\n')) {
      token += s[ind++];
    }
    yield token;
    token = '';
  }

}

function read() {
  return new Promise((resolve) => {
    fs.readFile('input.txt', 'utf-8', (err, data) => {
      if (err) {
        throw new Error('File reading error!');
      }
      resolve(data);
    });
  });
}

async function main() {
  let data = await read();
  let tokenizer = generateTokenizer(data)

  // code starts from here
  // Below code is an example code snippet for reading an input integer array

  let n = tokenizer.next().value;
  let arr = [];

  for (let i = 0; i < n; ++i) {
    arr.push(+tokenizer.next().value);
  }
  console.log(n);
  console.log(arr);
}

main();