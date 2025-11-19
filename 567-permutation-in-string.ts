// first approach
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const hashMap1 = new Map();
  const hashMap2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    hashMap1.set(s1.charCodeAt(i), (hashMap1.get(s1.charCodeAt(i)) || 0) + 1);
    hashMap2.set(s2.charCodeAt(i), (hashMap2.get(s2.charCodeAt(i)) || 0) + 1);
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (isMatches(hashMap1, hashMap2)) {
      return true;
    }
    hashMap2.set(s2.charCodeAt(i), hashMap2.get(s2.charCodeAt(i)) - 1);
    hashMap2.set(
      s2.charCodeAt(i + s1.length),
      (hashMap2.get(s2.charCodeAt(i + s1.length)) || 0) + 1
    );
  }

  return isMatches(hashMap1, hashMap2);
}
function isMatches(Map1: Map<number, number>, Map2: Map<number, number>) {
  for (let [key, _] of Map1) {
    if (Map1.get(key) !== Map2.get(key)) {
      return false;
    }
  }
  return true;
}



// secon(improved) approach 

function checkInclusion1(s1: string, s2: string): boolean {
  // edge case
    if (s1.length > s2.length) return false;

    // create frequency array for 26 letters
  const array = new Array(26).fill(0);
  // populate the array with s1 and first window of s2
  for (let l of s1) array[l.charCodeAt(0) - 97]++  
  // decrease the count for the first window of s2
  for (let i = 0; i < s1.length; i++) {
    array[s2[i].charCodeAt(0) - 97]--
  }

  // check if all counts are zero
  if (array.every(i=> i === 0)) return true;

    // slide the window over s2
  for (let i = s1.length; i < s2.length; i++) {
    // include the next character in the window
    // exclude the first character of the previous window
    array[s2[i].charCodeAt(0) - 97]--
    array[s2[i-s1.length].charCodeAt(0) - 97]++

    // check if all counts are zero
    if (array.every(i=> i === 0)) return true;
  }

  // no permutation found
  return false;
}


