[![GitHub issues](https://img.shields.io/badge/npm-1.0.0-lightgreen)](https://github.com/windate3411/utils-npm-package)
## Descripition
This package contains vary of functions I found myself used quite often while dealing with leetcode questions.
Feel free to let me know what's on your mind :D

## Install

```
npm install @windate3411/utils
```

## Basic Usages

```
const utils = require("@windate3411/utils")

uitls.isPrime(4);
//false

uitls.countElement([1,4,3,2,2,5,7,6])
//{ '1': 1, '2': 2,
    '3': 1, '4': 1, 
    '5': 1, '6': 1, 
    '7': 1 }

uitls.permutaion([1,2,3])
//[ [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ] ]
```

## Table of contents

| function          | description                                      | params type | return data type |
|-------------------|--------------------------------------------------|-------------|------------------|
| isPrime(num)      | check if num is a prime number                   | number      | boolean          |
| countPrime(num)   | count how many prime numbers between 0 and num   | number      | number           |
| countElement(arr) | count elements in the array and return an object | array       | object           |
| combination(m,n)  | return the number of combinations given C(m,n)   | number      | number           |
| fraction(num)     | return the fraction of num                       | number      | number           |
| permutaion(arr)   | return the permutaions of given arr              | array       | array            |
| objectSort(obj)   | return sorted object alphabetically              | object      | object           |


## Author
Danny Wang