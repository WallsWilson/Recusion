/** product: calculate the product of an array of numbers. */

function product(nums) {
    if(nums.length === 0) {
      return 1;
    } else {
      return nums[0] * product(nums.slice(1));
    }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    const restLength = longest(words.slice(1));
    const firstLength = words[0].length;
    return firstLength > restLength ? firstLength : restLength;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length = 0) {
    return "";
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if(str.length <= 1) {
      return true;
    } else {
      return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1));
    }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(index >= arr.length) {
    return -1;
  } else if (arr[index] === val) {
    return index;
  } else {
    return findIndex(arr, val, index + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str === '') {
    return '';
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = [];
  for(let key in obj) {
    if(typeof obj[key]=== "string") {
      res.push(obj[key]);
    }else if (typeof obj[key] === "object") {
      res = res.concat(gatherStrings(obj[key]));
    }
    }
    return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). **/
function binarySearch(arr, val) {
  if (low > high) {
    return -1;
  }
  let mid = (low + high) >>> 1;
  if (arr[mid] < val) {
    return mid;
} else if (arr[mid] < val) {
  return binarySearch(arr, val, mid + 1, high);
} else {
  return binarySearch(arr, val, low, mid - 1);
}
}
module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
