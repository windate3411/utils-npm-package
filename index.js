function isPrime(num) {
  if (typeof num !== "number") throw TypeError('This is not a valid number');
  for (var i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return num > 1;
}

function countPrime(num) {
  if (typeof num !== "number") throw TypeError('This is not a valid number');
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) count++
  }
  return count
}

function fraction(num) {
  if (typeof num !== "number") throw TypeError('This is not a valid number');
  if (num <= 1) return 1;
  return num * fraction(num - 1)
}

function permutaion(nums, sets = [], results = []) {
  if (!nums.length) results.push([...sets]);
  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((item, index) => index !== i)
    sets.push(nums[i])
    permutaion(newNums, sets, results)
    sets.pop()
  }
  return results
}

function combination(m, n) {
  if (typeof m !== "number" || typeof n !== "number" || m < n) throw TypeError('This is not a valid number');

  return fraction(m) / fraction(n) / fraction(m - n)
}

function countElement(arr) {
  const result = arr.reduce((obj, item) => {
    if (item in obj) {
      obj[item]++
    } else {
      obj[item] = 1
    }
    return obj
  }, {})
  return result
}

function objectSort(obj) {
  const sorted = Object.keys(obj)
    .sort()
    .reduce((acc, key) => ({
      ...acc, [key]: obj[key]
    }), {})
  return sorted
}

module.exports = {
  isPrime,
  countPrime,
  countElement,
  combination,
  permutaion,
  objectSort,
  fraction
}